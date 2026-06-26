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
        {/* Label */}
        <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">OUR CLIENTS</p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
          We&apos;ve worked with brands that ship.
        </h2>
        <p className="font-body text-lg text-white/50 max-w-xl mb-16 leading-relaxed">
          From bootstrapped startups to established names. Different industries, same playbook.
        </p>

        {/* Brand grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px border border-white/10 mb-16">
          {brandNames.map((name, i) => (
            <motion.div
              key={name}
              className="flex items-center justify-center py-8 px-4 border border-white/10 text-white/20 hover:text-white/70 font-heading text-sm tracking-wider transition-colors cursor-default"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              {name}
            </motion.div>
          ))}
        </div>

        {/* Partner rows */}
        <div className="flex flex-col gap-6">
          {/* Social media partners */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-t border-white/10">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest w-48 shrink-0">
              SOCIAL MEDIA PARTNERS
            </p>
            <div className="flex flex-wrap gap-2">
              {socialPartners.map((p) => (
                <span
                  key={p}
                  className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          {/* AI partners */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-t border-white/10">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest w-48 shrink-0">
              AI PARTNERS
            </p>
            <div className="flex flex-wrap gap-2">
              {aiPartners.map((p) => (
                <span
                  key={p}
                  className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
