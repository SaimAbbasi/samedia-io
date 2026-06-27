'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/lib/services-data'

export default function Services() {
  return (
    <section className="bg-off-white px-6 py-24 border-t border-dark/10">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-baseline mb-10">
          <p className="font-mono text-xs text-dark/50 uppercase tracking-widest">OUR SERVICES</p>
          <p className="font-mono text-xs text-dark/30">01 - 15</p>
        </div>

        {/* Intro */}
        <motion.p
          className="font-body text-lg text-dark/70 max-w-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We run strategy, design, development, and marketing as one operating system.
          One team, one heartbeat.
        </motion.p>

        {/* Service rows */}
        <div className="border-t border-dark/20">
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
                className="group relative flex items-center gap-6 py-5 border-b border-dark/20 pl-0 hover:pl-3 transition-all duration-300 overflow-hidden"
              >
                {/* Lime left border on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-lime transition-all duration-300" />
                {/* Background flash on hover */}
                <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.03] transition-colors duration-300" />
                {/* Number */}
                <span className="font-mono text-sm text-lime w-10 shrink-0 relative">{s.n}</span>
                {/* Name */}
                <span className="font-heading text-xl text-dark flex-1 relative group-hover:translate-x-1 transition-transform duration-300">
                  {s.name}
                </span>
                {/* Description */}
                <span className="font-body text-sm text-dark/50 text-right hidden md:block max-w-xs relative">
                  {s.tagline}
                </span>
                {/* Arrow */}
                <span className="font-mono text-sm text-dark/30 group-hover:text-lime group-hover:translate-x-1 transition-all duration-300 shrink-0 relative">
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
