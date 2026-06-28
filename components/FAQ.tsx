'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'What services does SA Media offer?',
    a: 'We offer brand strategy and positioning, brand identity and design, social media management, content creation, media buying and ads, influencer marketing, SEO and content strategy, email and CRM automation, web and e-commerce development, app development, analytics and attribution, AI development and automation, AI agent building, AIEO and GEO optimization, and event planning and production.',
  },
  {
    q: 'How does SA Media measure campaign success?',
    a: 'We track measurable KPIs including reach, engagement rate, conversion rates, cost per acquisition, and revenue attribution. Everything is reported transparently so you always know what your investment is doing.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across real estate, fintech, hospitality, fashion, luxury retail, e-commerce, legal, SaaS, healthcare, fitness, education, and professional services. Our playbook adapts to your industry, audience, and goals.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Paid campaigns typically show measurable results within 30 days. Organic growth through SEO and content compounds over three to six months. We set honest expectations upfront and report progress throughout.',
  },
  {
    q: 'Do you work with businesses of all sizes?',
    a: 'Yes. We work with bootstrapped startups and established brands alike. Our approach scales to your stage, from launch campaigns to full-funnel growth systems across multiple markets.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">FAQ</p>

        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-5xl text-white mb-10 md:mb-16">
          Frequently Asked <span className="text-teal">Questions</span>
        </h2>

        {/* Accordion */}
        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-white/10 ${openIndex === i ? 'border-l-2 border-l-lime pl-4' : ''} transition-all duration-200`}>
              <button
                className="w-full flex justify-between items-center py-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-heading text-lg transition-colors duration-200 ${openIndex === i ? 'text-lime' : 'text-white'}`}>{faq.q}</span>
                <span className={`font-mono text-xl shrink-0 transition-colors duration-200 ${openIndex === i ? 'text-lime' : 'text-white/40'}`}>
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

        <div className="mt-10">
          <Link
            href="/faq"
            className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
          >
            VIEW ALL FAQS →
          </Link>
        </div>
      </div>
    </section>
  )
}
