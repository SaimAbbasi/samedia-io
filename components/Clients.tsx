'use client'
import { motion } from 'framer-motion'

const row1 = ['YSL', 'Lamborghini', 'Netflix', 'Emirates', 'Nike', 'Adidas', 'Apple', 'Samsung']
const row2 = ['Spotify', 'Airbnb', 'Tesla', 'LVMH', 'Gucci', 'Rolex', 'Zara', 'Louis Vuitton']

const socialPartners = [
  { name: 'Meta', color: 'lime' },
  { name: 'Google', color: 'teal' },
  { name: 'TikTok', color: 'lime' },
  { name: 'YouTube', color: 'teal' },
  { name: 'Instagram', color: 'lime' },
  { name: 'LinkedIn', color: 'teal' },
  { name: 'X / Twitter', color: 'lime' },
  { name: 'Snapchat', color: 'teal' },
  { name: 'Pinterest', color: 'lime' },
  { name: 'Reddit', color: 'teal' },
  { name: 'Shopify', color: 'lime' },
  { name: 'WhatsApp Business', color: 'teal' },
  { name: 'Threads', color: 'lime' },
  { name: 'Twitch', color: 'teal' },
  { name: 'Telegram', color: 'lime' },
  { name: 'Discord', color: 'teal' },
]

const growthPartners = [
  { name: 'HubSpot', color: 'lime' },
  { name: 'Klaviyo', color: 'teal' },
  { name: 'Mailchimp', color: 'lime' },
  { name: 'Salesforce', color: 'teal' },
  { name: 'Google Analytics 4', color: 'lime' },
  { name: 'Semrush', color: 'teal' },
  { name: 'Ahrefs', color: 'lime' },
  { name: 'Hotjar', color: 'teal' },
  { name: 'Zapier', color: 'lime' },
  { name: 'ActiveCampaign', color: 'teal' },
  { name: 'Notion', color: 'lime' },
  { name: 'Webflow', color: 'teal' },
  { name: 'WordPress', color: 'lime' },
  { name: 'WooCommerce', color: 'teal' },
  { name: 'Stripe', color: 'lime' },
  { name: 'Intercom', color: 'teal' },
]

const aiPartners = [
  { name: 'ChatGPT', color: 'lime' },
  { name: 'Claude', color: 'teal' },
  { name: 'Gemini', color: 'lime' },
  { name: 'Grok', color: 'teal' },
  { name: 'Perplexity', color: 'lime' },
  { name: 'Midjourney', color: 'teal' },
  { name: 'Runway', color: 'lime' },
  { name: 'Sora', color: 'teal' },
  { name: 'ElevenLabs', color: 'lime' },
  { name: 'HeyGen', color: 'teal' },
  { name: 'Kling AI', color: 'lime' },
  { name: 'Pika', color: 'teal' },
  { name: 'Stable Diffusion', color: 'lime' },
  { name: 'FLUX', color: 'teal' },
  { name: 'Adobe Firefly', color: 'lime' },
  { name: 'Canva AI', color: 'teal' },
  { name: 'Make', color: 'lime' },
  { name: 'n8n', color: 'teal' },
  { name: 'Zapier AI', color: 'lime' },
  { name: 'Jasper', color: 'teal' },
  { name: 'Copy.ai', color: 'lime' },
  { name: 'Descript', color: 'teal' },
  { name: 'Synthesia', color: 'lime' },
  { name: 'DeepL', color: 'teal' },
]

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
            <span className="font-heading text-3xl md:text-6xl lg:text-7xl tracking-tight text-white/10 group-hover:text-teal transition-colors duration-300 px-5 md:px-8">
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
    <section className="bg-dark py-14 md:py-24 overflow-hidden border-t-[3px] border-teal">
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
              className="group font-heading text-2xl md:text-5xl text-white cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="group-hover:text-teal transition-colors duration-300">Brands that ship.</span><br />
              <span className="text-lime group-hover:text-teal transition-colors duration-300">We help them grow.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <motion.p
              className="font-body text-sm text-white/40 max-w-xs leading-relaxed md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From bootstrapped startups to iconic names. Different industries, same relentless playbook.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a
                href="/clients"
                className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
              >
                VIEW ALL CLIENTS →
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mb-16">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Partner ecosystem */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest">Platform Ecosystem</p>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Social media partners */}
        <div className="mb-10">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
            <p className="font-mono text-xs text-lime uppercase tracking-widest">Social &amp; Distribution</p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {socialPartners.map((p, i) => (
              <motion.div
                key={p.name}
                className="group relative cursor-default overflow-hidden border border-white/10 hover:border-lime/60 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
              >
                {/* top accent */}
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* glow */}
                <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.06] transition-colors duration-300" />
                <span className="relative flex items-center gap-2 px-5 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime transition-colors duration-300 shrink-0" />
                  <span className="font-heading text-base text-white/50 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {p.name}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth & CRM partners */}
        <div className="mb-10">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
            <p className="font-mono text-xs text-lime uppercase tracking-widest">Growth, CRM &amp; Analytics</p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {growthPartners.map((p, i) => (
              <motion.div
                key={p.name}
                className="group relative cursor-default overflow-hidden border border-white/10 hover:border-lime/60 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.06] transition-colors duration-300" />
                <span className="relative flex items-center gap-2 px-5 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime transition-colors duration-300 shrink-0" />
                  <span className="font-heading text-base text-white/50 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {p.name}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI partners */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
            <p className="font-mono text-xs text-teal uppercase tracking-widest">AI &amp; Automation</p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {aiPartners.map((p, i) => (
              <motion.div
                key={p.name}
                className="group relative cursor-default overflow-hidden border border-white/10 hover:border-teal/60 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 bg-teal/0 group-hover:bg-teal/[0.06] transition-colors duration-300" />
                <span className="relative flex items-center gap-2 px-5 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/40 group-hover:bg-teal transition-colors duration-300 shrink-0" />
                  <span className="font-heading text-base text-white/50 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {p.name}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
