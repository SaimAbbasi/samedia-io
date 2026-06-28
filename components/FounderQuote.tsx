'use client'
import { motion } from 'framer-motion'

export default function FounderQuote() {
  return (
    <section className="bg-off-white px-6 py-20 overflow-hidden border-t-[3px] border-lime">
      <div className="max-w-7xl mx-auto relative">

        {/* Large decorative quote mark */}
        <span className="pointer-events-none absolute -top-6 -left-2 font-heading text-[160px] leading-none text-dark/[0.04] select-none">
          &ldquo;
        </span>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">
            Our Philosophy
          </p>

          {/* Quote */}
          <blockquote className="font-heading text-4xl md:text-6xl lg:text-7xl text-dark leading-tight max-w-4xl mb-10">
            Where{' '}
            <span className="text-dark underline decoration-lime decoration-4 underline-offset-4">Data</span>
            {' '}Meets{' '}
            <span className="text-teal">Design</span>
            <span className="text-teal">.</span>
          </blockquote>

          {/* Attribution */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="w-8 h-px bg-dark/30" />
            <div>
              <p className="font-mono text-sm text-dark">Saim Abbasi</p>
              <p className="font-body text-xs text-dark/40">Founder &amp; CEO, SA Media</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: decorative stat pill */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="border border-dark/15 px-6 py-3 text-right">
            <p className="font-heading text-3xl text-dark">1B+</p>
            <p className="font-mono text-xs text-dark/40 uppercase tracking-widest">Social Reach</p>
          </div>
          <div className="border border-teal/40 px-6 py-3 text-right">
            <p className="font-heading text-3xl text-teal">50+</p>
            <p className="font-mono text-xs text-dark/40 uppercase tracking-widest">Global Clients</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
