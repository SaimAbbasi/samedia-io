'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logotype */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-black text-white text-lg tracking-wider">SA</span>
          <span className="w-0.5 h-5 bg-lime" />
          <span className="font-heading font-light text-white text-lg tracking-wider">MEDIA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-xs uppercase tracking-wider text-cream hover:text-lime transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <nav
          aria-label="Mobile menu"
          className="md:hidden fixed inset-0 bg-dark flex flex-col items-center justify-center gap-8 z-40"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-2xl uppercase tracking-wider text-white hover:text-lime transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
