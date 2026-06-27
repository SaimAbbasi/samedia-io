'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '1B+', label: 'Social Media Reach', sub: 'Across all managed channels' },
  { value: '50M+', label: 'Likes Generated', sub: 'Organic & paid combined' },
  { value: '$1M+', label: 'Sales Generated', sub: 'Direct attribution' },
  { value: '100+', label: 'Creatives', sub: 'Produced every month' },
  { value: '50+', label: 'Clients', sub: 'Across 3 continents' },
]

const testimonials = [
  {
    quote: 'They transformed our social presence completely. Results we hadn\'t seen in years.',
    attribution: 'Roshan U.',
    role: 'COO, Practitionet',
  },
  {
    quote: 'Strategic, data-driven, and actually fun to work with.',
    attribution: 'Mike K.',
    role: 'Founder, Pricimetrics',
  },
  {
    quote: 'Best investment we made for our brand\'s digital growth.',
    attribution: 'Mohammad K.',
    role: 'CEO, Mebame',
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

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="group relative border border-white/10 p-8 overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(234,241,58,0.4)', y: -4, transition: { duration: 0.2 } }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.04] transition-colors duration-400" />

      {/* Animated bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-lime"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0, width: '100%' }}
      />

      <div className="relative">
        <motion.p
          className="font-mono font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-3 group-hover:text-lime transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {stat.value}
        </motion.p>
        <p className="font-heading text-base text-white/80 mb-1">{stat.label}</p>
        <p className="font-body text-xs text-white/30">{stat.sub}</p>
      </div>
    </motion.div>
  )
}

export default function WhySAMedia() {
  return (
    <section className="bg-dark px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          WHY SA MEDIA
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-white leading-tight mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Numbers that<br />
          <span className="text-lime">speak for themselves.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 mb-24">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <motion.p
            className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CLIENTS SAY
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="group relative border border-white/10 p-8 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: 'rgba(152,198,191,0.35)', y: -4, transition: { duration: 0.2 } }}
              >
                {/* Large quote decoration */}
                <span className="absolute top-4 right-6 font-heading text-7xl text-white/5 leading-none select-none group-hover:text-teal/10 transition-colors duration-300">
                  &ldquo;
                </span>
                <div className="relative">
                  <p className="font-heading text-lg md:text-xl text-white leading-snug mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-teal" />
                    <div>
                      <p className="font-mono text-xs text-teal">{t.attribution}</p>
                      <p className="font-body text-xs text-white/30">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What we don't do */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <motion.p
            className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHAT WE DON&apos;T DO
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            {dontDo.map((item, i) => (
              <motion.div
                key={item}
                className="group flex items-center gap-3 cursor-default"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <span className="w-4 h-px bg-white/20 group-hover:bg-lime/60 transition-colors duration-300 shrink-0" />
                <span className="font-body text-sm text-white/40 group-hover:line-through group-hover:text-white/20 transition-all duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              READY?
            </motion.p>
            <motion.h2
              className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s build the growth<br />your brand deserves.
            </motion.h2>
          </div>
          <Link
            href="/contact-us"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}
