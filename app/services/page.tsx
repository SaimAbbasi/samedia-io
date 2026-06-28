import WhatsOnTheTable from '@/components/WhatsOnTheTable'
import Services from '@/components/Services'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | SA Media Digital Marketing, Design, AI and Growth',
  description:
    'SA Media offers 15 services including brand strategy, social media management, paid media, SEO, web development, AI automation, and event production. One team for everything your brand needs.',
  openGraph: {
    title: 'Services | SA Media',
    description: '15 services. One global media firm. Strategy, design, development, marketing, AI, and events for brands across Toronto, New York, Dubai, and beyond.',
    url: 'https://samedia.io/services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SA Media Services',
  description: 'Full-service digital marketing, design, development, and AI services offered by SA Media.',
  provider: { '@type': 'Organization', name: 'SA Media', url: 'https://samedia.io' },
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Brand Strategy and Positioning' },
    { '@type': 'ListItem', position: 2, name: 'Brand Identity and Design' },
    { '@type': 'ListItem', position: 3, name: 'Social Media Management' },
    { '@type': 'ListItem', position: 4, name: 'Content Creation' },
    { '@type': 'ListItem', position: 5, name: 'Media Buying and Ads' },
    { '@type': 'ListItem', position: 6, name: 'Influencer Marketing' },
    { '@type': 'ListItem', position: 7, name: 'SEO and Content Strategy' },
    { '@type': 'ListItem', position: 8, name: 'Email and CRM Automation' },
    { '@type': 'ListItem', position: 9, name: 'Web and E-commerce Development' },
    { '@type': 'ListItem', position: 10, name: 'App Development' },
    { '@type': 'ListItem', position: 11, name: 'Analytics and Attribution' },
    { '@type': 'ListItem', position: 12, name: 'AI Development and Automation' },
    { '@type': 'ListItem', position: 13, name: 'AI Agent Building' },
    { '@type': 'ListItem', position: 14, name: 'AIEO and GEO Optimization' },
    { '@type': 'ListItem', position: 15, name: 'Event Planning and Production' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[55vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">OUR SERVICES</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl leading-none text-white mb-6">
            <span className="block">Everything</span>
            <span className="block">your brand</span>
            <span className="block text-lime">needs to grow.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed mt-6">
            SA Media runs 15 services as one integrated system. No hand-offs between agencies. No brief lost in translation. One team, one operating system, one goal: measurable growth for your brand.
          </p>
        </div>
      </section>

      {/* Services rows */}
      <Services />

      {/* What is on the table */}
      <WhatsOnTheTable />

      {/* Why one team */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <p className="font-mono text-xs text-lime uppercase tracking-widest mb-4">ONE TEAM</p>
            <p className="font-body text-sm text-white/55 leading-relaxed">
              When strategy, creative, and execution sit in the same room, everything moves faster and nothing falls between the cracks. SA Media operates with a single point of contact for every engagement.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-lime uppercase tracking-widest mb-4">BUILT FOR RESULTS</p>
            <p className="font-body text-sm text-white/55 leading-relaxed">
              Every service SA Media delivers connects to a measurable outcome. We track performance against KPIs you actually care about: leads, sales, subscribers, and market share.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-lime uppercase tracking-widest mb-4">GLOBAL REACH</p>
            <p className="font-body text-sm text-white/55 leading-relaxed">
              With operations in Toronto, New York, Dubai, Singapore, Monaco, and Miami, SA Media brings local market knowledge to every strategy without sacrificing global perspective.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-dark leading-tight max-w-2xl">
              Let&apos;s build the growth your brand deserves.
            </h2>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/capabilities"
              className="font-heading text-lg text-dark border border-dark/30 px-8 py-4 hover:border-lime hover:text-lime transition-colors duration-200 text-center"
            >
              View capabilities →
            </Link>
            <a
              href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-lg text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity text-center"
            >
              Start a project →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
