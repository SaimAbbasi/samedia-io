'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '1B+', label: 'Social Media Reach' },
  { value: '50M+', label: 'Likes Generated' },
  { value: '$1M+', label: 'Sales Generated' },
  { value: '100+', label: 'Creatives' },
  { value: '50+', label: 'Clients' },
]

const testimonials = [
  {
    quote: '"They transformed our social presence completely. Results we hadn\'t seen in years."',
    attribution: '— Roshan U. · COO at Practitionet',
  },
  {
    quote: '"Strategic, data-driven, and actually fun to work with."',
    attribution: '— Mike K. · Pricimetrics',
  },
  {
    quote: '"Best investment we made for our brand\'s digital growth."',
    attribution: '— Mohammad K. · Mebame',
  },
]

const dontDo = [
  'Vanity metrics',
  'Cookie-cutter content',
  'Endless revisions',
  'Generic strategies',
  'Buzzword decks',
  'Slow turnarounds',
]

export default function WhySAMedia() {
  return (
    <section className="bg-off-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-16">WHY SA MEDIA</p>

        {/* — THE NUMBERS */}
        <div className="py-12 border-t border-dark/20">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-10">— THE NUMBERS</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-mono font-bold text-5xl md:text-6xl text-dark leading-none mb-2">
                  {s.value}
                </p>
                <p className="font-body text-sm text-dark/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — CLIENTS SAY */}
        <div className="py-12 border-t border-dark/20">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-10">— CLIENTS SAY</p>
          <div className="flex flex-col divide-y divide-dark/10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="py-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-heading text-xl md:text-2xl text-dark italic max-w-2xl mb-3">
                  {t.quote}
                </p>
                <p className="font-body text-sm text-teal">{t.attribution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — WHAT WE DON'T DO */}
        <div className="py-12 border-t border-dark/20">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-10">
            — WHAT WE DON'T DO
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl">
            {dontDo.map((item) => (
              <p key={item} className="font-body text-base text-dark/60">
                — {item}
              </p>
            ))}
          </div>
        </div>

        {/* — READY? */}
        <div className="py-12 border-t border-dark/20">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-8">— READY?</p>
          <h2 className="font-heading text-4xl md:text-5xl text-dark mb-6 max-w-2xl">
            Let's build the growth your brand deserves.
          </h2>
          <Link
            href="/contact-us"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}
