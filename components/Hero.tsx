'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const words = ['DIGITAL', 'GROWTH', 'SOLUTIONS.']

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex flex-col justify-center overflow-hidden px-6 pt-16">
      <div className="max-w-7xl mx-auto w-full py-24">
        {/* Eyebrow */}
        <p className="font-mono text-xs text-lime tracking-widest uppercase mb-8">
          DIGITAL MARKETING AGENCY
        </p>

        {/* Stacked headline */}
        <h1 className="font-heading text-7xl md:text-9xl leading-none text-white mb-10">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subhead */}
        <p className="font-body text-lg text-white/60 max-w-lg leading-relaxed mb-10">
          Impactful digital strategies that connect brands with their audiences
          and deliver measurable results.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-8">
          <Link
            href="/services"
            className="font-body text-sm text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors"
          >
            Our services
          </Link>
          <Link
            href="/contact-us"
            className="font-body text-sm text-lime hover:opacity-80 transition-opacity"
          >
            Free consultation →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex justify-between items-end">
        <p className="font-mono text-xs text-teal tracking-widest uppercase">
          TORONTO · NEW YORK · DUBAI
        </p>
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-mono text-xs text-white/30 uppercase tracking-widest"
        >
          SCROLL ↓
        </motion.p>
      </div>
    </section>
  )
}
