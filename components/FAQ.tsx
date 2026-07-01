'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { homeFaqs } from '@/lib/faq-data'

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
          {homeFaqs.map((faq, i) => (
            <div key={i} className={`border-b border-white/10 ${openIndex === i ? 'border-l-2 border-l-lime pl-4' : ''} transition-all duration-200`}>
              <button
                className="w-full flex justify-between items-center py-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
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
