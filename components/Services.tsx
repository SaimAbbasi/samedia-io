'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import Orb from './Orb'

const services = [
  {
    id: '01',
    name: 'Brand Development',
    description: 'Bespoke brand identity crafted from strategy to execution.',
  },
  {
    id: '02',
    name: 'Social Media Management',
    description: 'Full-service social presence management across all platforms.',
  },
  {
    id: '03',
    name: 'Web Development & SEO',
    description: 'High-performance websites optimized for search and conversion.',
  },
  {
    id: '04',
    name: 'Digital Community Architects',
    description: 'Building and nurturing engaged digital communities.',
  },
  {
    id: '05',
    name: 'Marketing',
    description: 'Data-driven campaigns that generate measurable results.',
  },
  {
    id: '06',
    name: 'Photography & Videography',
    description: 'Premium visual content that elevates your brand story.',
  },
  {
    id: '07',
    name: 'Graphic & 3D Design',
    description: 'Distinctive visuals from print to immersive 3D experiences.',
  },
]

export default function Services() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-16">
          <div>
            <SectionLabel number="02" label="Our Services" light />
            <h2 className="font-heading font-black uppercase text-dark text-6xl md:text-8xl leading-none mt-4">
              OUR<br />SERVICES
            </h2>
          </div>
          <Orb src="/images/orb-teal.png" alt="teal orb" size="md" className="hidden md:block" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group bg-cream p-8 hover:bg-dark transition-colors cursor-default"
            >
              <span className="font-heading font-bold text-lime text-5xl leading-none block mb-4">
                {service.id}
              </span>
              <h3 className="font-heading font-black text-dark group-hover:text-white text-xl uppercase mb-3 transition-colors">
                {service.name}
              </h3>
              <p className="font-body text-dark/60 group-hover:text-cream/70 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
              <div className="mt-6 h-0.5 w-0 bg-lime group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-px bg-dark flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6">
          <p className="font-body text-white text-lg">
            Ready to skyrocket your business potential?
          </p>
          <Link
            href="/contact-us"
            className="font-heading text-sm uppercase tracking-wider px-8 py-3 bg-lime text-dark font-bold hover:bg-lime/90 transition-colors whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
