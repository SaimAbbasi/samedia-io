'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const lineColors = ['text-teal', 'text-teal', 'text-lime']

export default function WhatWeDo() {
  const lines = ['Digital Growth', 'Systems using', 'Data & Design.']
  return (
    <section className="bg-off-white px-6 py-16 md:py-32 overflow-hidden border-t-[3px] border-lime">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs text-teal uppercase tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WHAT WE DO
        </motion.p>

        <h2 className="font-heading text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-none">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${lineColors[i]}`}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h2>

        {/* Dual animated underlines */}
        <div className="flex gap-3 mt-8">
          <motion.div
            className="h-0.5 bg-lime"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="h-0.5 bg-teal"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0, width: '40px' }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/what-we-do"
            className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
          >
            LEARN MORE ABOUT WHAT WE DO →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
