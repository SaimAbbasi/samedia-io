'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const words = ['DIGITAL', 'GROWTH', 'SOLUTIONS.']

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex flex-col justify-center overflow-hidden px-6 pt-16">

      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(152,198,191,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(234,241,58,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Animated grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(152,198,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(152,198,191,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full py-24 relative z-10">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs text-lime tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DIGITAL MARKETING AGENCY
        </motion.p>

        {/* Stacked headline */}
        <h1 className="font-heading text-7xl md:text-9xl leading-none text-white mb-10">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 60, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subhead */}
        <motion.p
          className="font-body text-lg text-white/60 max-w-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Impactful digital strategies that connect brands with their audiences
          and deliver measurable results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
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
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex justify-between items-end z-10">
        <motion.p
          className="font-mono text-xs text-teal tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          TORONTO · NEW YORK · DUBAI
        </motion.p>
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
