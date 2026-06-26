'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from './SectionLabel'

const testimonials = [
  {
    quote:
      '"Their swift turnaround time surprised us, turning our ideas into a powerful MVP. The team listened keenly to our needs, delivering designs that perfectly align with our vision."',
    name: 'Roshan Uruthirakumar',
    role: 'COO & Co-Founder at Practitionet',
  },
  {
    quote:
      '"SA Media transformed our digital presence completely. Their data-driven approach and creative execution delivered results beyond what we thought possible."',
    name: 'Mike Kimmel',
    role: 'Founder at Pricimetrics',
  },
  {
    quote:
      '"Working with SA Media felt like having a world-class marketing team embedded in our company. Every strategy was tailored, every result was measurable."',
    name: 'Mohammad K',
    role: 'CEO at Mebame',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel number="06" label="Testimonials" />

        <span
          aria-hidden="true"
          className="font-heading font-black text-lime text-[12rem] leading-none block -mb-16 select-none"
        >
          &ldquo;
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <blockquote className="font-body italic text-white text-2xl md:text-3xl leading-relaxed mb-8">
              {testimonials[active].quote}
            </blockquote>
            <p className="font-heading font-bold text-white text-lg">
              {testimonials[active].name}
            </p>
            <p className="font-body text-teal text-sm mt-1">
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? 'bg-lime w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
