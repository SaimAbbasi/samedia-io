'use client'
import { motion } from 'framer-motion'

const services = [
  { n: '01', name: 'Brand Strategy & Positioning', desc: 'Market research, ICP mapping, and digital marketing planning' },
  { n: '02', name: 'Brand Identity & Design', desc: 'Logos, UX/UI, motion design, and print collateral' },
  { n: '03', name: 'Social Media Management', desc: 'Full-channel presence, content calendars, community growth' },
  { n: '04', name: 'Content Creation', desc: 'Photo, video, UGC, and written content at scale' },
  { n: '05', name: 'Media Buying & Ads', desc: 'Google, Meta, and TikTok campaigns that convert' },
  { n: '06', name: 'Influencer Marketing', desc: 'Creator partnerships matched to your audience' },
  { n: '07', name: 'SEO & Content Strategy', desc: 'Organic growth through search and authority content' },
  { n: '08', name: 'Email & CRM Automation', desc: 'Sequences and flows that nurture and retain' },
  { n: '09', name: 'Web & E-commerce Development', desc: 'Sites, stores, and landing pages built for conversion' },
  { n: '10', name: 'App Development', desc: 'Custom web and mobile applications, end to end' },
  { n: '11', name: 'Analytics & Attribution', desc: 'GA4, GTM, and data pipelines that prove ROI' },
]

export default function Services() {
  return (
    <section className="bg-off-white px-6 py-24 border-t border-dark/10">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-baseline mb-10">
          <p className="font-mono text-xs text-dark/50 uppercase tracking-widest">OUR SERVICES</p>
          <p className="font-mono text-xs text-dark/30">01 — 11</p>
        </div>

        {/* Intro */}
        <p className="font-body text-lg text-dark/70 max-w-xl mb-12 leading-relaxed">
          We run strategy, design, development, and marketing as one operating system.
          One team, one heartbeat.
        </p>

        {/* Service rows */}
        <div className="border-t border-dark/20">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              className="group relative flex items-center gap-6 py-5 border-b border-dark/20 pl-0 hover:pl-2 transition-all duration-200 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {/* Lime left border on hover */}
              <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-lime transition-all duration-200" />
              {/* Number */}
              <span className="font-mono text-sm text-lime w-10 shrink-0">{s.n}</span>
              {/* Name */}
              <span className="font-heading text-xl text-dark flex-1">{s.name}</span>
              {/* Description */}
              <span className="font-body text-sm text-dark/50 text-right hidden md:block max-w-xs">
                {s.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
