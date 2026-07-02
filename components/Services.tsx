'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/lib/services-data'

export default function Services() {
  return (
    <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-baseline mb-10">
          <p className="font-mono text-xs text-teal uppercase tracking-widest">OUR SERVICES</p>
          <p className="font-mono text-xs text-white/20">01 - {String(services.length).padStart(2, '0')}</p>
        </div>

        {/* Intro */}
        <motion.p
          className="font-body text-lg text-white/60 max-w-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We run strategy, design, development, and marketing as{' '}
          <span className="text-lime">one operating system.</span>{' '}
          One team, one heartbeat.
        </motion.p>

        {/* Service rows */}
        <div className="border-t border-white/15">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex items-center gap-6 py-5 border-b border-white/10 pl-0 hover:pl-3 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-lime transition-all duration-300" />
                <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.06] transition-colors duration-300" />
                <span className="font-mono text-sm text-lime w-10 shrink-0 relative">{s.n}</span>
                <span className="font-heading text-base md:text-xl text-white flex-1 relative group-hover:translate-x-1 transition-transform duration-300">
                  {s.name}
                </span>
                <span className="font-body text-sm text-white/40 text-right hidden md:block max-w-xs relative">
                  {s.tagline}
                </span>
                <span className="font-mono text-sm text-white/25 group-hover:text-lime group-hover:translate-x-1 transition-all duration-300 shrink-0 relative">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
