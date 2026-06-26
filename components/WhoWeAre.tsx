'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const locations = ['Toronto', 'New York', 'Dubai']

export default function WhoWeAre() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="01" label="Who We Are" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left: big tagline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black uppercase leading-none text-5xl md:text-7xl text-white">
              BY THE<br />
              <span className="text-lime">CREATIVES</span><br />
              FOR THE<br />
              CREATORS
            </h2>
          </motion.div>

          {/* Right: body + locations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center gap-8"
          >
            <p className="font-body text-cream/80 text-lg leading-relaxed">
              SA Media is a digital space for creators and creatives that combines
              creativity with data-driven insights to help drive brands&apos; growth by
              elevating their digital presence. Our approach involves analytically
              delving into clients&apos; metrics, working collaboratively to enhance their
              performance, and scaling their brands through bespoke solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="font-body text-sm text-dark bg-teal px-4 py-1.5 rounded-full"
                >
                  📍 {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
