'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { faqCategories } from '@/lib/faq-data'

export default function FAQPageClient() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="min-h-[45vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">FAQ</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl leading-none text-white mb-6">
            Frequently Asked{' '}
            <span className="text-teal">Questions.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-xl leading-relaxed mt-6">
            Everything you want to know about working with SA Media, our services, process, and pricing.
            If your question is not here, reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      {faqCategories.map((cat, ci) => (
        <section
          key={cat.name}
          className={`px-6 py-10 md:py-16 border-t-[3px] ${ci % 2 === 0 ? 'bg-off-white border-lime' : 'bg-dark border-teal'}`}
        >
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">
              {cat.name}
            </p>
            <div className={`border-t ${ci % 2 === 0 ? 'border-dark/10' : 'border-white/10'}`}>
              {cat.faqs.map((faq) => {
                const key = `${cat.name}:${faq.q}`
                const isOpen = openKey === key
                return (
                  <div
                    key={faq.q}
                    className={`border-b transition-all duration-200 ${isOpen ? 'border-l-2 border-l-lime pl-4' : ''} ${ci % 2 === 0 ? 'border-dark/10' : 'border-white/10'}`}
                  >
                    <button
                      className="w-full flex justify-between items-center py-6 text-left gap-4"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-heading text-lg transition-colors duration-200 ${isOpen ? 'text-lime' : ci % 2 === 0 ? 'text-dark' : 'text-white'}`}>
                        {faq.q}
                      </span>
                      <span className={`font-mono text-xl shrink-0 transition-colors duration-200 ${isOpen ? 'text-lime' : ci % 2 === 0 ? 'text-dark/40' : 'text-white/40'}`}>
                        {isOpen ? '×' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className={`font-body text-base pb-6 max-w-2xl leading-relaxed ${ci % 2 === 0 ? 'text-dark/60' : 'text-white/60'}`}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">STILL HAVE QUESTIONS?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl">
              We are happy to talk<br />
              <span className="text-lime">through the details.</span>
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
            className="font-heading text-xl text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity shrink-0"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}
