'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion'
import { services } from '@/lib/services-data'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }
  function closeDropdown() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logotype */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/sa-media-logo.png"
            alt="SA Media"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
            priority
          />
          <span className="font-heading font-bold text-white text-base tracking-wider">SA MEDIA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={link.href}
                  className="font-body text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <motion.span
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block text-white/40 text-[10px]"
                  >
                    ▾
                  </motion.span>
                </Link>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-dark border border-white/10 shadow-2xl"
                      style={{ width: '560px' }}
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      {/* Arrow tip */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-dark border-l border-t border-white/10 rotate-45" />

                      <div className="p-6">
                        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
                          All Services
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group flex items-center gap-2 py-2 border-b border-white/5 hover:border-lime/30 transition-colors"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="font-mono text-xs text-lime/60 w-6 shrink-0">{s.n}</span>
                              <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">
                                {s.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Link
                            href="/services"
                            className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest"
                            onClick={() => setDropdownOpen(false)}
                          >
                            VIEW ALL SERVICES →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-wider text-lime border border-lime px-4 py-2 hover:opacity-80 transition-opacity"
          >
            Start a project
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white flex flex-col gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile menu"
            className="md:hidden fixed inset-0 bg-dark flex flex-col items-center justify-center gap-6 z-40 overflow-y-auto py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              aria-label="Close menu"
              className="absolute top-5 right-6 text-white text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>

            <Link href="/" className="flex items-center gap-3 mb-2" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/sa-media-logo.png"
                alt="SA Media"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading font-bold text-white text-xl tracking-wider">SA MEDIA</span>
            </Link>

            <Link
              href="/"
              className="font-heading text-3xl text-white hover:text-lime transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services group in mobile */}
            <div className="w-full max-w-sm px-6">
              <p className="font-heading text-3xl text-white text-center mb-4">
                <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-body text-sm text-white/50 hover:text-lime transition-colors py-1 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {['Blog', 'Team', 'About', 'Contact'].map((label) => (
              <Link
                key={label}
                href={label === 'Contact' ? '/contact-us' : `/${label.toLowerCase()}`}
                className="font-heading text-3xl text-white hover:text-lime transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xl text-lime border border-lime px-6 py-3 mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Start a project
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
