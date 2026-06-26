'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="min-h-screen bg-dark px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h1 className="font-heading text-7xl md:text-9xl leading-none mb-16">
          <span className="block text-white">LET&apos;S</span>
          <span className="block text-lime">TALK.</span>
        </h1>

        {submitted ? (
          <div>
            <p className="font-heading text-2xl text-white mb-4">Message sent.</p>
            <p className="font-body text-lg text-white/50">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="flex flex-col gap-10">
              {/* Name */}
              <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                />
              </div>
              {/* Email */}
              <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                />
              </div>
              {/* Company */}
              <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                <input
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none"
                />
              </div>
              {/* Message */}
              <div className="border-b border-white/20 focus-within:border-lime transition-colors">
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/30 py-3 outline-none resize-none"
                />
              </div>
              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
                >
                  Send it →
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Contact info */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="font-mono text-sm text-teal tracking-wider">
            hello@samedia.io · TORONTO · NEW YORK · DUBAI
          </p>
        </div>
      </div>
    </section>
  )
}
