'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logotype */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-white text-base tracking-wider">SA</span>
          <span className="w-px h-4 bg-lime" />
          <span className="font-heading font-bold text-white text-base tracking-wider">MEDIA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="font-body text-xs uppercase tracking-wider text-lime border border-lime px-4 py-2 hover:bg-lime hover:text-dark transition-colors"
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
      {menuOpen && (
        <nav
          aria-label="Mobile menu"
          className="md:hidden fixed inset-0 bg-dark flex flex-col items-center justify-center gap-10 z-40"
        >
          <button
            aria-label="Close menu"
            className="absolute top-5 right-6 text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-4xl text-white hover:text-lime transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="font-heading text-xl text-lime border border-lime px-6 py-3"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  )
}
