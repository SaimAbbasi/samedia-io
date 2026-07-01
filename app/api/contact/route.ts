import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limiter: 5 submissions per IP per hour.
// Note: resets on serverless cold start — for persistent limiting, use Redis/Upstash.
const rateLimit = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)
  if (!record || now > record.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (record.count >= RATE_LIMIT_MAX) return false
  record.count++
  return true
}

function htmlEscape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const { name, email, company, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Contact Form] No RESEND_API_KEY — logging submission:', { name, email, company, message })
        return NextResponse.json({ success: true })
      }
      console.error('[Contact Form] RESEND_API_KEY is not set in production.')
      return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 })
    }

    const safeName = htmlEscape(String(name))
    const safeEmail = htmlEscape(String(email))
    const safeCompany = company ? htmlEscape(String(company)) : null
    const safeMessage = htmlEscape(String(message)).replace(/\n/g, '<br/>')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SA Media Contact Form <noreply@samedia.io>',
        to: ['saim@samedia.io'],
        reply_to: email,
        subject: `New enquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ''}`,
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    })

    if (!response.ok) {
      const body = await response.text()
      console.error('[Contact Form] Resend error:', response.status, body)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
