'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at info@samedia.io.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="min-h-screen bg-dark px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-b-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">GET IN TOUCH</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-9xl leading-none mb-6">
            <span className="block text-white">LET&apos;S</span>
            <span className="block text-lime">TALK.</span>
          </h1>
          <p className="font-body text-base text-white/50 max-w-lg leading-relaxed mb-10 md:mb-16">
            Tell us about your brand and what you are trying to build. We will come back to you within one business day.
          </p>

          {submitted ? (
            <div className="max-w-md">
              <p className="font-heading text-2xl text-white mb-4">Message received.</p>
              <p className="font-body text-base text-white/50">We will be in touch within one business day. In the meantime, book a discovery call below.</p>
              <a
                href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-heading text-lg text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity"
              >
                Book a discovery call →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-10">
                  <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                    />
                  </div>
                  <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                    />
                  </div>
                  <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      placeholder="Company or brand"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                    />
                  </div>
                  <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                    <textarea
                      name="message"
                      placeholder="What are you working on?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none resize-none"
                    />
                  </div>
                  {error && (
                    <p className="font-body text-sm text-red-400">{error}</p>
                  )}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="font-heading text-xl text-lime hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer p-0 disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Send it →'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Right column info */}
              <div className="flex flex-col gap-10 lg:pt-2">
                <div>
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">PREFER A CALL?</p>
                  <p className="font-body text-sm text-white/50 leading-relaxed mb-4">
                    Book a free 30-minute discovery call with our team. We will talk through your goals and whether SA Media is the right fit.
                  </p>
                  <a
                    href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-base text-lime border border-lime px-6 py-3 inline-block hover:opacity-80 transition-opacity"
                  >
                    Book a discovery call →
                  </a>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">CONTACT</p>
                  <a
                    href="mailto:info@samedia.io"
                    className="font-heading text-lg text-white hover:text-lime transition-colors duration-200"
                  >
                    info@samedia.io
                  </a>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">WHERE WE ARE</p>
                  <div className="flex flex-col gap-2">
                    {['Toronto', 'New York', 'Dubai', 'Singapore', 'Monaco', 'Miami'].map((city) => (
                      <p key={city} className="font-body text-sm text-white/50">{city}</p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">TYPICAL RESPONSE TIME</p>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    We respond to all enquiries within one business day. For urgent requests, email us directly.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom context */}
      <section className="bg-off-white px-6 py-10 md:py-16 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-3">WHAT HAPPENS NEXT</p>
            <p className="font-body text-sm text-dark/60 leading-relaxed">
              We review your brief, ask any clarifying questions, and come back with a clear proposal within 48 hours. No fluff, no sales pitch.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-3">WHO WE WORK WITH</p>
            <p className="font-body text-sm text-dark/60 leading-relaxed">
              Founders, marketing leads, and CEOs across real estate, fintech, hospitality, fashion, e-commerce, SaaS, and more. Bootstrapped to Series B.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-3">NOT SURE WHERE TO START?</p>
            <p className="font-body text-sm text-dark/60 leading-relaxed mb-3">
              Read through our services or browse the blog. Or just send us a message and we will help you figure it out.
            </p>
            <Link href="/services" className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest">
              VIEW SERVICES →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
