'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import Orb from './Orb'

const offerings = [
  {
    orbSrc: '/images/orb-cream.png',
    orbAlt: 'cream orb',
    title: 'BUSINESS STRATEGY',
    description:
      'Leveraging innovative data analytics and digital transformation strategies to help scale your business.',
  },
  {
    orbSrc: '/images/orb-lime.png',
    orbAlt: 'lime orb',
    title: 'BRAND BUILDING',
    description:
      'Bespoke brand development personalized to your audiences visual palette.',
  },
  {
    orbSrc: '/images/orb-dark.png',
    orbAlt: 'dark orb',
    title: 'BRAND MAINTENANCE',
    description:
      'We assist clients in maintaining the integrity and quality of the brand we have crafted for them.',
  },
]

export default function WhatWeOffer() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="03" label="What We Offer" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <Orb src={item.orbSrc} alt={item.orbAlt} size="md" />
              <h3 className="font-heading font-bold text-lime text-lg uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <hr className="mt-20 border-white/10" />
      </div>
    </section>
  )
}
