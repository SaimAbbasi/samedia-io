'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'What services does SA Media offer?',
    a: 'We offer social media management, content creation, media buying & ads, influencer marketing, SEO & content strategy, email & CRM automation, and web design & development.',
  },
  {
    q: 'How does SA Media measure campaign success?',
    a: 'We track measurable KPIs including reach, engagement rate, conversion rates, cost per acquisition, and revenue attribution - all reported transparently.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across e-commerce, fashion, lifestyle, tech, hospitality, and professional services. Our playbook adapts to your industry, audience, and goals.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Paid campaigns typically show measurable results within 30 days. Organic growth through SEO and content compounds over 3–6 months. We set honest expectations upfront.',
  },
  {
    q: 'Do you work with businesses of all sizes?',
    a: 'Yes. We work with bootstrapped startups and established brands alike. Our approach scales to your stage - from launch campaigns to full-funnel growth systems.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-dark px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">FAQ</p>

        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-16">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                className="w-full flex justify-between items-center py-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-heading text-lg text-white">{faq.q}</span>
                <span className="font-mono text-xl text-lime shrink-0">
                  {openIndex === i ? '×' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-base text-white/60 pb-6 max-w-2xl leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
