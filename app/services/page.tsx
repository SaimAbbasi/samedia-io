import WhatsOnTheTable from '@/components/WhatsOnTheTable'
import Services from '@/components/Services'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] bg-dark px-6 pt-32 pb-24 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">OUR SERVICES</p>
          <h1 className="font-heading text-6xl md:text-8xl leading-none text-white">
            <span className="block">Everything</span>
            <span className="block">you need</span>
            <span className="block">to grow.</span>
          </h1>
        </div>
      </section>

      {/* Services rows */}
      <Services />

      {/* What's on the table */}
      <WhatsOnTheTable />

      {/* CTA */}
      <section className="bg-off-white px-6 py-20 border-t border-dark/20">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-8">READY?</p>
          <h2 className="font-heading text-4xl md:text-5xl text-dark mb-6 max-w-2xl">
            Let&apos;s build the growth your brand deserves.
          </h2>
          <Link
            href="/contact-us"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
