'use client'
import { motion } from 'framer-motion'

const brandNames = [
  'YSL', 'Lamborghini', 'Netflix', 'Emirates', 'Nike', 'Adidas',
  'Apple', 'Samsung', 'Spotify', 'Airbnb', 'Tesla', 'LVMH',
]

const socialPartners = ['Meta', 'Google', 'TikTok', 'Shopify']
const aiPartners = ['ChatGPT', 'Midjourney', 'Grammarly', 'Tome']

export default function Clients() {
  return (
    <section className="bg-dark px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs text-teal uppercase tracking-widest mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          OUR CLIENTS
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We&apos;ve worked with brands that ship.
        </motion.h2>
        <motion.p
          className="font-body text-lg text-white/50 max-w-xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From bootstrapped startups to established names. Different industries, same playbook.
        </motion.p>

        {/* Brand grid with hover glow */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px border border-white/10 mb-16">
          {brandNames.map((name, i) => (
            <motion.div
              key={name}
              className="relative flex items-center justify-center py-8 px-4 border border-white/10 font-heading text-sm tracking-wider cursor-default overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/5 transition-colors duration-300" />
              <span className="relative text-white/20 group-hover:text-white/80 transition-colors duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partner rows */}
        <div className="flex flex-col gap-6">
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-t border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest w-48 shrink-0">
              SOCIAL MEDIA PARTNERS
            </p>
            <div className="flex flex-wrap gap-2">
              {socialPartners.map((p, i) => (
                <motion.span
                  key={p}
                  className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1 hover:border-lime hover:text-lime transition-colors cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-t border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest w-48 shrink-0">
              AI PARTNERS
            </p>
            <div className="flex flex-wrap gap-2">
              {aiPartners.map((p, i) => (
                <motion.span
                  key={p}
                  className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1 hover:border-lime hover:text-lime transition-colors cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
