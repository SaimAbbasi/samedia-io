'use client'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

const words = ['DIGITAL', 'GROWTH', 'SOLUTIONS']
const ticker = [
  'BRAND STRATEGY & POSITIONING',
  'BRAND IDENTITY & DESIGN',
  'SOCIAL MEDIA MANAGEMENT',
  'CONTENT CREATION',
  'MEDIA BUYING & ADS',
  'INFLUENCER MARKETING',
  'SEO & CONTENT STRATEGY',
  'EMAIL & CRM AUTOMATION',
  'WEB & E-COMMERCE DEVELOPMENT',
  'APP DEVELOPMENT',
  'ANALYTICS & ATTRIBUTION',
  'AI DEVELOPMENT & AUTOMATION',
  'AI AGENT BUILDING',
  'AIEO & GEO OPTIMIZATION',
  'EVENT PLANNING & PRODUCTION',
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const orbX = useTransform(springX, [0, 1], [-30, 30])
  const orbY = useTransform(springY, [0, 1], [-20, 20])


  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [mouseX, mouseY])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-dark flex flex-col overflow-hidden pt-16">

      {/* Parallax gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,198,191,0.13) 0%, transparent 65%)',
          x: orbX,
          y: orbY,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(234,241,58,0.07) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(152,198,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(152,198,191,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content — flex-1 fills space between top and bottom strips */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs text-lime tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GLOBAL MEDIA FIRM
        </motion.p>

        {/* Stacked headline */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-9xl leading-none text-white mb-8 md:mb-10">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block relative cursor-default select-none group"
              initial={{ opacity: 0, y: 60, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 8, color: '#EAF13A', transition: { duration: 0.18 } }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subhead */}
        <motion.p
          className="font-body text-base md:text-lg text-white/60 max-w-lg leading-relaxed mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Impactful digital strategies that connect brands with their audiences
          and deliver measurable results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/services"
            className="font-body text-sm text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors"
          >
            Our services
          </Link>
          <Link
            href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-body text-sm text-lime hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            Free consultation
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Cities strip — in flow, sits naturally above the ticker */}
      <div className="relative z-10 border-t border-white/10 px-6 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap justify-center items-baseline gap-x-3 gap-y-2 md:gap-x-6"
          >
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-lime tracking-widest leading-none">TORONTO</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white/20 leading-none select-none">/</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white tracking-widest leading-none">NEW YORK</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white/20 leading-none select-none">/</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-teal tracking-widest leading-none">DUBAI</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white/20 leading-none select-none">/</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-teal tracking-widest leading-none">SINGAPORE</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white/20 leading-none select-none">/</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-lime tracking-widest leading-none">MONACO</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white/20 leading-none select-none">/</span>
            <span className="font-heading text-base sm:text-xl md:text-3xl lg:text-4xl text-white tracking-widest leading-none">MIAMI</span>
          </motion.div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden">
        <motion.div
          className="flex gap-12 py-4 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className={`font-mono text-xs uppercase tracking-widest shrink-0 ${i % 3 === 0 ? 'text-white/30' : i % 3 === 1 ? 'text-lime/40' : 'text-teal/40'}`}>
              {item} <span className="text-white/15 mx-4">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
