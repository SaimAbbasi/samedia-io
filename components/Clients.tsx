'use client'
import { motion } from 'framer-motion'

const row1 = ['YSL', 'Lamborghini', 'Netflix', 'Emirates', 'Nike', 'Adidas', 'Apple', 'Samsung']
const row2 = ['Spotify', 'Airbnb', 'Tesla', 'LVMH', 'Gucci', 'Rolex', 'Zara', 'Louis Vuitton']

const socialPartners = ['Meta', 'Google', 'TikTok', 'Shopify']
const aiPartners = ['ChatGPT', 'Midjourney', 'Grammarly', 'Tome']

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-4 border-y border-white/10">
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="group inline-flex items-center gap-0 cursor-default select-none"
          >
            <span className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight text-white/10 group-hover:text-white transition-colors duration-300 px-8">
              {name}
            </span>
            <span className="font-mono text-lime/30 text-lg group-hover:text-lime transition-colors duration-300">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="bg-dark py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.p
              className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              OUR CLIENTS
            </motion.p>
            <motion.h2
              className="font-heading text-3xl md:text-5xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Brands that ship.<br />
              <span className="text-lime">We help them grow.</span>
            </motion.h2>
          </div>
          <motion.p
            className="font-body text-base text-white/40 max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From bootstrapped startups to iconic names. Different industries, same relentless playbook.
          </motion.p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mb-16">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Partner rows */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-0 border border-white/10">
          {/* Social media partners */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-6 p-6 border-b border-white/10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest md:w-44 shrink-0">
              SOCIAL PARTNERS
            </p>
            <div className="flex flex-wrap gap-3">
              {socialPartners.map((p, i) => (
                <motion.span
                  key={p}
                  className="group relative font-mono text-sm text-white/50 border border-white/15 px-4 py-2 cursor-default overflow-hidden hover:text-white hover:border-lime transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/5 transition-colors duration-300" />
                  <span className="relative">{p}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* AI partners */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-6 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest md:w-44 shrink-0">
              AI PARTNERS
            </p>
            <div className="flex flex-wrap gap-3">
              {aiPartners.map((p, i) => (
                <motion.span
                  key={p}
                  className="group relative font-mono text-sm text-white/50 border border-white/15 px-4 py-2 cursor-default overflow-hidden hover:text-white hover:border-teal transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="absolute inset-0 bg-teal/0 group-hover:bg-teal/5 transition-colors duration-300" />
                  <span className="relative">{p}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
