'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Orb from './Orb'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex items-center overflow-hidden">
      {/* Faint S letterform background */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-[32rem] text-white/5 select-none pointer-events-none leading-none"
      >
        S
      </span>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 py-20">
        {/* Left content — 60% */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-8">
          {/* Label */}
          <p className="font-heading text-lime text-xs uppercase tracking-widest">
            — Digital Marketing Agency
          </p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            className="font-heading font-black uppercase leading-none"
          >
            <span className="block text-7xl md:text-9xl lg:text-[10rem] text-white">DIGITAL</span>
            <span className="block text-7xl md:text-9xl lg:text-[10rem] text-lime">GROWTH</span>
            <span className="block text-7xl md:text-9xl lg:text-[10rem] text-white">SOLUTIONS</span>
          </motion.h1>

          {/* Subheading */}
          <p className="font-body text-cream/80 text-lg max-w-lg leading-relaxed">
            Striving to create impactful digital media strategies that connect
            our clients with their target audiences and deliver exceptional results.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="font-heading text-sm uppercase tracking-wider px-8 py-4 bg-lime text-dark font-bold hover:bg-lime/90 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact-us"
              className="font-heading text-sm uppercase tracking-wider px-8 py-4 border border-white text-white hover:border-lime hover:text-lime transition-colors"
            >
              Free Consultation Call
            </Link>
          </div>

          {/* Locations */}
          <p className="font-body text-xs uppercase tracking-widest text-teal">
            Toronto · New York · Dubai
          </p>
        </div>

        {/* Right orb — 40% */}
        <div className="hidden lg:flex lg:col-span-2 items-center justify-end">
          <Orb
            src="/images/orb-lime.png"
            alt="SA Media lime orb"
            size="xl"
            animate
            className="translate-x-24"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading text-lime text-xs uppercase tracking-widest"
      >
        ↓ Scroll
      </motion.div>
    </section>
  )
}
