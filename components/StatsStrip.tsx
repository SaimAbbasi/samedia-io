'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '1B+', label: 'Social Media Reach' },
  { value: '50M+', label: 'Likes' },
  { value: '$1M+', label: 'Sales Generated' },
  { value: '100+', label: 'Creatives' },
  { value: '50+', label: 'Clients' },
]

export default function StatsStrip() {
  return (
    <section className="bg-lime py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-heading font-black text-dark text-5xl md:text-6xl leading-none">
                {stat.value}
              </span>
              <span className="font-body text-xs uppercase tracking-widest text-dark/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
