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


function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="group relative border border-white/10 p-5 md:p-8 overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(234,241,58,0.4)', y: -4, transition: { duration: 0.2 } }}
    >
      <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.04] transition-colors duration-400" />

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-lime"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0, width: '100%' }}
      />

      <div className="relative">
        <motion.p
          className="font-mono font-bold text-4xl md:text-6xl lg:text-7xl text-lime leading-none mb-3"
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
    <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
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
          className="font-heading text-3xl md:text-6xl text-white leading-tight mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Numbers that<br />
          <span className="text-lime">speak for themselves.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 mb-16">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        {/* Testimonials link */}
        <div className="mb-16 border-t border-white/10 pt-12">
          <motion.p
            className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CLIENTS SAY
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/testimonials"
              className="font-heading text-2xl md:text-4xl text-white hover:text-lime transition-colors duration-300"
            >
              Read what our clients say →
            </Link>
          </motion.div>
        </div>

        {/* Why SA Media page link */}
        <div className="mb-8 border-t border-white/10 pt-10">
          <Link
            href="/why-sa-media"
            className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
          >
            DISCOVER WHY BRANDS CHOOSE US →
          </Link>
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
            href="https://calendly.com/samedia-saim/sa-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}
