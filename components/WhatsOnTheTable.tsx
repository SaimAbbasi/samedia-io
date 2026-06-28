'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const columns = [
  {
    n: '01',
    name: 'Strategy',
    accent: 'bg-lime',
    items: ['Digital Marketing Plan', 'Positioning & ICP', 'AI Opportunity Scan', 'Analytics & Attribution (GA4, GTM)'],
  },
  {
    n: '02',
    name: 'Design',
    accent: 'bg-teal',
    items: ['Brand Identity & Logos', 'UX Flows & Wireframes', 'High-Fidelity UI', 'Motion & Micro-interactions', 'Print & Collateral'],
  },
  {
    n: '03',
    name: 'Build',
    accent: 'bg-lime',
    items: ['Web Development', 'E-commerce Development', 'App Development', 'API Integrations', 'Performance & Core Web Vitals', 'Security & Accessibility'],
  },
  {
    n: '04',
    name: 'Market',
    accent: 'bg-teal',
    items: ['Social Media & UGC', 'Google, Meta & TikTok Ads', 'SEO & Content Strategy', 'Email & SMS Automations', 'Influencer Campaigns', 'Affiliate Marketing', 'Landing Pages & CRO', 'Local SEO'],
  },
  {
    n: '05',
    name: 'AI',
    accent: 'bg-lime',
    items: ['AI Development & Automation', 'AI Agent Building', 'AIEO Optimization', 'GEO Optimization', 'ChatGPT & Gemini Visibility', 'AI Workflow Integration', 'Prompt Engineering', 'AI Opportunity Audit'],
  },
  {
    n: '06',
    name: 'Events',
    accent: 'bg-teal',
    items: ['Event Strategy & Concept', 'Corporate Events & Conferences', 'Brand Activations & Launches', 'Venue Sourcing & Management', 'Event Branding & Design', 'Live Streaming & Production', 'Hybrid & Virtual Events', 'Event Marketing & Promotion', 'Sponsorship Management', 'Post-Event Analytics'],
  },
]

export default function WhatsOnTheTable() {
  return (
    <section className="bg-off-white px-6 py-14 md:py-24 border-t-[3px] border-lime">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">
            WHAT&apos;S ON THE TABLE
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark">
            Everything you need,{' '}
            <span className="text-lime">under one roof.</span>
          </h2>
        </div>

        {/* Link */}
        <div className="mb-8">
          <Link
            href="/capabilities"
            className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
          >
            EXPLORE ALL CAPABILITIES →
          </Link>
        </div>

        {/* 6-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-dark/10">
          {columns.map((col, i) => (
            <motion.div
              key={col.n}
              className="bg-off-white py-8 px-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Colored top accent */}
              <div className={`h-0.5 ${col.accent} mb-6 w-full`} />
              {/* Column header */}
              <div className="mb-6">
                <p className="font-mono text-xs text-dark/30 mb-1">{col.n}</p>
                <p className="font-heading text-xl text-dark">{col.name}</p>
              </div>
              {/* Items */}
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item} className="font-body text-sm text-dark/65 flex items-start gap-2">
                    <span className="text-dark/20 mt-1 shrink-0">·</span>
                    {item}
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
