import Link from 'next/link'
import { services } from '@/lib/services-data'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer>
      {/* Main body */}
      <div className="bg-off-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* CTA block */}
          <div className="mb-16 pb-16 border-b border-dark">
            <h2 className="font-heading text-5xl md:text-7xl text-dark mb-4">
              READY TO GROW?
            </h2>
            <Link
              href="/contact-us"
              className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
            >
              Start a project →
            </Link>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* Agency */}
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">AGENCY</p>
              <p className="font-body text-sm text-dark/70 leading-relaxed mb-4">
                Toronto, ON<br />
                Canada
              </p>
              <a
                href="mailto:hello@samedia.io"
                className="font-body text-sm text-dark/70 hover:text-dark transition-colors"
              >
                hello@samedia.io
              </a>
            </div>

            {/* Explore */}
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">EXPLORE</p>
              <div className="flex flex-col gap-1.5">
                {exploreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-body text-sm text-dark/70 hover:text-dark transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services col 1 */}
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">SERVICES</p>
              <div className="flex flex-col gap-1.5">
                {services.slice(0, 8).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-body text-sm text-dark/70 hover:text-dark transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services col 2 */}
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4 opacity-0 pointer-events-none select-none">
                &nbsp;
              </p>
              <div className="flex flex-col gap-1.5">
                {services.slice(8).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-body text-sm text-dark/70 hover:text-dark transition-colors"
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
      <div className="bg-dark px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
            © SA MEDIA · TORONTO · NEW YORK · DUBAI · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
