import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 | Page Not Found, SA Media',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <section className="min-h-screen bg-dark flex flex-col justify-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">404</p>
        <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl leading-none text-white mb-6">
          <span className="block">PAGE</span>
          <span className="block text-lime">NOT FOUND.</span>
        </h1>
        <p className="font-body text-base text-white/50 max-w-md leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Head back to the homepage or explore our services.
        </p>
        <div className="flex flex-wrap items-center gap-8">
          <Link
            href="/"
            className="font-heading text-lg text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity"
          >
            Back to home →
          </Link>
          <Link
            href="/services"
            className="font-body text-sm text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5"
          >
            View our services
          </Link>
        </div>
      </div>
    </section>
  )
}
