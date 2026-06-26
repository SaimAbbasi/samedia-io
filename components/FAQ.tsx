'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from './SectionLabel'

const faqs = [
  {
    q: 'How can social media marketing benefit real estate agents, coaches, doctors, lawyers, and financial consultants?',
    a: 'Our social media marketing services empower professionals across numerous industries to establish thought leadership, build trust with their audience, and attract new clients. By leveraging platforms like Facebook, Instagram, TikTok, and LinkedIn, we help our clients increase brand visibility, drive website traffic, and generate high-quality leads, ultimately scaling the business and reputation.',
  },
  {
    q: 'What content marketing services do you offer?',
    a: 'Our content marketing agency provides strategic content creation, distribution across social media platforms, email marketing, blogs, and other relevant channels, as well as analysis and optimization to ensure maximum impact and help our clients achieve their goals.',
  },
  {
    q: 'What are the different types of digital media services?',
    a: 'Our digital marketing agency offers a range of services, including social media management, website development, search engine optimization (SEO), social media advertising, lead generation, email marketing, content marketing, influencer marketing, and data-driven digital strategy development.',
  },
  {
    q: 'How does your company approach brand development?',
    a: "Our agency takes a holistic approach to brand development, combining data-driven strategies with creative vision. We understand our clients' goals, audience, and value proposition to craft a compelling brand narrative, ensuring consistency across all touchpoints.",
  },
  {
    q: 'How are your services priced?',
    a: 'Our social media marketing costs vary based on your business goals and scope of services. We offer flexible pricing options, including monthly retainers, project-based fees, and performance-based pricing. We work with our onboarding clients to create a customized proposal that meets their budget and objectives.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionLabel number="07" label="FAQ" light />
        <h2 className="font-heading font-black uppercase text-dark text-5xl md:text-7xl leading-none mt-4 mb-16">
          FREQUENTLY<br />ASKED<br />QUESTIONS
        </h2>

        <div className="divide-y divide-dark/20">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex justify-between items-start gap-4 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-heading font-bold text-dark text-base md:text-lg leading-snug">
                  {faq.q}
                </span>
                <span className="font-heading font-bold text-lime text-2xl flex-shrink-0 mt-0.5">
                  {open === i ? '×' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-dark/70 text-base leading-relaxed pb-6">
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
