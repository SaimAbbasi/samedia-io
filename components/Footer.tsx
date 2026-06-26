import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/samedia.io/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sa-mediaio/about/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@samedia.io' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo + copyright */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading font-black text-white text-lg tracking-wider">SA</span>
              <span className="w-0.5 h-5 bg-lime" />
              <span className="font-heading font-light text-white text-lg tracking-wider">MEDIA</span>
            </div>
            <p className="font-body text-sm text-cream/50">SA Media©</p>
          </div>

          {/* Center: Nav */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cream/70 hover:text-lime transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Socials */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="font-body text-sm text-cream/70 hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-xs uppercase tracking-widest text-lime text-center">
            BY THE CREATIVES FOR THE CREATORS
          </p>
        </div>
      </div>
    </footer>
  )
}
