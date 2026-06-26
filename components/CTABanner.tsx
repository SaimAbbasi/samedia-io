'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="bg-lime py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black uppercase text-dark leading-none text-7xl md:text-9xl mb-8"
        >
          CONNECT<br />WITH US
        </motion.h2>

        <p className="font-body text-dark/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          To get started, simply reach out to us via phone, email, or our website to
          schedule a free initial consultation. We&apos;ll discuss your business goals,
          challenges, and marketing needs — then craft a customized plan.
        </p>

        <Link
          href="/contact-us"
          className="inline-block font-heading text-sm uppercase tracking-wider px-10 py-4 bg-dark text-white font-bold hover:bg-dark/80 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
