'use client'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { value: '1B+', label: 'Social Media Reach', sub: 'Across all managed channels' },
  { value: '50M+', label: 'Likes Generated', sub: 'Organic & paid combined' },
  { value: '$1M+', label: 'Sales Generated', sub: 'Direct attribution' },
  { value: '100+', label: 'Creatives', sub: 'Produced every month' },
  { value: '50+', label: 'Clients', sub: 'Across 3 continents' },
]

const testimonials = [
  {
    quote: 'The website they built for us is the best thing we have done for the brand. Clean, fast, and built around our story.',
    attribution: 'Aarav Chugh',
    role: 'Founder, Aarav\'s Garage',
  },
  {
    quote: 'SA Media gave our brand a clear identity and a website to match. The content strategy alone changed how people talk about us.',
    attribution: 'James Li',
    role: 'Founder, James Li Realty',
  },
  {
    quote: 'From brand positioning to a full site build, they handled everything with zero hand-holding needed. The result speaks for itself.',
    attribution: 'Meaghan McNeill',
    role: 'Founder, Meaghan Living Properties',
  },
  {
    quote: 'I came in with a rough idea of who we were as a brand. SA Media turned that into a full identity, a content system, and a site that actually converts.',
    attribution: 'Joseph Argiro',
    role: 'Founder, Iron Key Capital',
  },
  {
    quote: 'SA Media understood our vision faster than any agency I have worked with. The brand development process was tight, and the content strategy has been running itself since day one.',
    attribution: 'Vullnet Nura',
    role: 'CEO, Vullnet Nura Group',
  },
  {
    quote: 'They transformed our social presence completely. Results we hadn\'t seen in years.',
    attribution: 'Roshan U.',
    role: 'COO, Pulse',
  },
  {
    quote: 'Strategic, data-driven, and actually fun to work with.',
    attribution: 'Mike K.',
    role: 'Founder, Pricimetrics',
  },
  {
    quote: 'Best investment we made for our brand\'s digital growth.',
    attribution: 'Mohammad K.',
    role: 'CEO, Mebame',
  },
]

const PER_PAGE = 3

const dontDo = [
  { label: 'Vanity Metrics', sub: 'Impressions without revenue mean nothing.' },
  { label: 'Cookie-Cutter Content', sub: 'Generic templates. Zero distinctiveness.' },
  { label: 'Endless Revisions', sub: 'We get it right. No endless loops.' },
  { label: 'Generic Strategies', sub: 'Copy-paste playbooks from another client.' },
  { label: 'Buzzword Decks', sub: 'Slides full of fluff, zero execution.' },
  { label: 'Slow Turnarounds', sub: 'The market does not wait. Neither do we.' },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="group relative border border-white/10 p-5 md:p-8 overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(234,241,58,0.4)', y: -4, transition: { duration: 0.2 } }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.04] transition-colors duration-400" />

      {/* Animated bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-lime"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0, width: '100%' }}
      />

      <div className="relative">
        <motion.p
          className="font-mono font-bold text-4xl md:text-6xl lg:text-7xl text-lime leading-none mb-3"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {stat.value}
        </motion.p>
        <p className="font-heading text-base text-white/80 mb-1">{stat.label}</p>
        <p className="font-body text-xs text-white/30">{stat.sub}</p>
      </div>
    </motion.div>
  )
}

function TestimonialCarousel() {
  const totalPages = Math.ceil(testimonials.length / PER_PAGE)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setPage((p) => (p + 1) % totalPages)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalPages])

  function goTo(next: number) {
    setDirection(next > page ? 1 : -1)
    setPage(next)
  }

  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="mb-12 md:mb-20">
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <motion.p
          className="font-mono text-xs text-white/30 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          CLIENTS SAY
        </motion.p>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => goTo((page - 1 + totalPages) % totalPages)}
            className="w-8 h-8 border border-white/20 hover:border-teal flex items-center justify-center text-white/40 hover:text-teal transition-colors duration-200 font-mono text-sm"
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={() => goTo((page + 1) % totalPages)}
            className="w-8 h-8 border border-white/20 hover:border-lime flex items-center justify-center text-white/40 hover:text-lime transition-colors duration-200 font-mono text-sm"
          >
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {visible.map((t, i) => (
              <div
                key={t.attribution}
                className="group relative border border-white/10 hover:border-teal/40 bg-white/[0.04] hover:bg-teal/[0.06] p-8 overflow-hidden transition-colors duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${i % 2 === 0 ? 'bg-lime' : 'bg-teal'}`} />
                <span className="absolute top-4 right-6 font-heading text-7xl text-white/5 leading-none select-none group-hover:text-teal/10 transition-colors duration-300">
                  &ldquo;
                </span>
                <div className="relative">
                  <p className="font-heading text-lg md:text-xl text-white leading-snug mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-teal" />
                    <div>
                      <p className="font-mono text-xs text-white/60 group-hover:text-teal transition-colors duration-300 cursor-default">{t.attribution}</p>
                      <p className="font-body text-xs text-white/30">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-px transition-all duration-300 ${
              i === page ? 'w-8 bg-lime' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
        <span className="font-mono text-xs text-white/20 ml-4">
          {page + 1} / {totalPages}
        </span>
      </div>
    </div>
  )
}

export default function WhySAMedia() {
  return (
    <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          WHY SA MEDIA
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-6xl text-white leading-tight mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Numbers that<br />
          <span className="text-lime">speak for themselves.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 mb-24">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        {/* Testimonials carousel */}
        <TestimonialCarousel />

        {/* What we don't do */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <motion.p
                className="font-mono text-xs text-white/30 uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                WHAT WE DON&apos;T DO
              </motion.p>
              <motion.h3
                className="font-heading text-3xl md:text-4xl text-white"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Six things you will <span className="text-lime">never</span> hear from us.
              </motion.h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {dontDo.map((item, i) => (
              <motion.div
                key={item.label}
                className="group relative bg-dark p-8 overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ backgroundColor: 'rgba(234,241,58,0.04)', transition: { duration: 0.2 } }}
              >
                {/* Index number */}
                <span className="font-mono text-xs text-white/10 mb-4 block">
                  0{i + 1}
                </span>

                {/* Crossed-out label */}
                <div className="relative mb-3 inline-block">
                  <p className="font-heading text-xl md:text-2xl text-white/60 group-hover:text-white/30 transition-colors duration-300">
                    {item.label}
                  </p>
                  {/* Strikethrough line */}
                  <motion.div
                    className="absolute left-0 top-1/2 h-[2px] bg-lime"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0, width: '100%' }}
                  />
                </div>

                {/* Sub-text */}
                <p className="font-body text-sm text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {item.sub}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-lime/20 group-hover:border-b-lime/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why SA Media page link */}
        <div className="mb-8 border-t border-white/10 pt-10">
          <Link
            href="/why-sa-media"
            className="font-mono text-xs text-teal hover:text-lime transition-colors duration-200 tracking-widest"
          >
            DISCOVER WHY BRANDS CHOOSE US →
          </Link>
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              READY?
            </motion.p>
            <motion.h2
              className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s build the growth<br />your brand deserves.
            </motion.h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}
