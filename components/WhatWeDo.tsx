'use client'
import { motion } from 'framer-motion'

const lines = ['Social Media,', 'Content &', 'Digital Growth.']

export default function WhatWeDo() {
  return (
    <section className="bg-off-white px-6 py-32 border-t border-dark/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-12">
          WHAT WE DO
        </p>
        <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-dark">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {line}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  )
}
