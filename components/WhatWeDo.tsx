'use client'
import { motion } from 'framer-motion'

const lines = ['Social Media,', 'Content &', 'Digital Growth.']

export default function WhatWeDo() {
  return (
    <section className="bg-off-white px-6 py-32 border-t border-dark/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WHAT WE DO
        </motion.p>

        <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-dark">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h2>

        {/* Animated lime underline */}
        <motion.div
          className="h-0.5 bg-lime mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{ originX: 0, width: '120px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  )
}
