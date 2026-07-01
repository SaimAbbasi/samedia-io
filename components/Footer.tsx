import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { services } from '@/lib/services-data'
import { fractionalServices } from '@/lib/fractional-data'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
]

const companyLinks = [
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Clients', href: '/clients' },
  { label: 'Why SA Media', href: '/why-sa-media' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/samedia.io', Icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sa-mediaio', Icon: FaLinkedinIn },

  { label: 'X / Twitter', href: 'https://x.com/samedia_saim', Icon: FaXTwitter },
  { label: 'YouTube', href: 'https://www.youtube.com/@SAMediaSaim', Icon: FaYoutube },
]

export default function Footer() {
  return (
    <footer>
      {/* Main body */}
      <div className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-dark">
        <div className="max-w-7xl mx-auto">
          {/* CTA block */}
          <div className="mb-16 pb-16 border-b border-dark/20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY TO GROW?</p>
                <h2 className="font-heading text-4xl md:text-7xl text-dark leading-none">
                  LET&apos;S BUILD<br />
                  <span className="text-lime">SOMETHING GREAT.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="https://calendly.com/samedia-saim/sa-discovery-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity text-center"
                >
                  Start a project →
                </Link>
                <a
                  href="mailto:info@samedia.io"
                  className="font-mono text-xs text-dark/50 hover:text-dark transition-colors tracking-widest text-center pt-1"
                >
                  info@samedia.io
                </a>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-10">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-5">
                <Image
                  src="/images/sa-media-logo.png"
                  alt="SA Media"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-heading font-bold text-dark text-sm tracking-wider">SA MEDIA</span>
              </Link>
              <p className="font-body text-sm text-dark/55 leading-relaxed mb-5">
                A global media firm running strategy, design, development, and marketing as one operating system.
              </p>
              <div className="flex flex-col gap-1 mb-5">
                <p className="font-body text-xs text-dark/40">Toronto · New York · Dubai · Singapore · Monaco · Miami</p>
                <a
                  href="mailto:info@samedia.io"
                  className="font-body text-sm text-dark/70 hover:text-lime transition-colors duration-200"
                >
                  info@samedia.io
                </a>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 border border-dark/20 hover:border-lime hover:text-lime flex items-center justify-center text-dark/50 transition-colors duration-200"
                  >
                    <s.Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">EXPLORE</p>
              <div className="flex flex-col gap-2">
                {exploreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-body text-sm text-dark/65 hover:text-lime transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">COMPANY</p>
              <div className="flex flex-col gap-2">
                {companyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-body text-sm text-dark/65 hover:text-lime transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services col 1 */}
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">SERVICES</p>
              <div className="flex flex-col gap-2">
                {services.slice(0, 8).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-body text-sm text-dark/65 hover:text-lime transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services col 2 */}
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4 opacity-0 pointer-events-none select-none">
                &nbsp;
              </p>
              <div className="flex flex-col gap-2">
                {services.slice(8).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-body text-sm text-dark/65 hover:text-lime transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fractional C-Suite */}
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">FRACTIONAL</p>
              <div className="flex flex-col gap-2">
                {fractionalServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/fractional/${s.slug}`}
                    className="font-body text-sm text-dark/65 hover:text-lime transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-dark px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} SA MEDIA · ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/30 hover:text-lime transition-colors duration-200"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
