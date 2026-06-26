'use client'
import { motion } from 'framer-motion'

const columns = [
  {
    n: '01',
    name: 'Strategy',
    items: ['Digital Marketing Plan', 'Positioning & ICP', 'AI Opportunity Scan', 'Analytics & Attribution (GA4, GTM)'],
  },
  {
    n: '02',
    name: 'Design',
    items: ['Brand Identity & Logos', 'UX Flows & Wireframes', 'High-Fidelity UI', 'Motion & Micro-interactions', 'Print & Collateral'],
  },
  {
    n: '03',
    name: 'Build',
    items: ['Web Development', 'E-commerce Development', 'App Development', 'API Integrations', 'Performance & Core Web Vitals', 'Security & Accessibility'],
  },
  {
    n: '04',
    name: 'Market',
    items: ['Social Media & UGC', 'Google, Meta & TikTok Ads', 'SEO & Content Strategy', 'Email & SMS Automations', 'Influencer Campaigns', 'Affiliate Marketing', 'Landing Pages & CRO', 'Local SEO'],
  },
]

export default function WhatsOnTheTable() {
  return (
    <section className="bg-off-white px-6 py-24 border-t border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">
            WHAT&apos;S ON THE TABLE
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark">
            Everything you need, under one roof.
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-dark/20">
          {columns.map((col, i) => (
            <motion.div
              key={col.n}
              className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Column header */}
              <div className="mb-6 pb-4 border-b border-dark/20">
                <p className="font-mono text-xs text-lime mb-1">{col.n}</p>
                <p className="font-heading text-xl text-dark">{col.name}</p>
              </div>
              {/* Items */}
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item} className="font-body text-sm text-dark/70">
                    — {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
