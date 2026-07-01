import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SA Media | Global Media Firm Founded in Toronto',
  description:
    'SA Media is a global media firm founded by Saim Abbasi. We run strategy, design, development, and marketing as one operating system for brands in Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  openGraph: {
    title: 'About SA Media | Global Media Firm',
    description:
      'Founded in Toronto by Saim Abbasi. 50+ brands. 1B+ reach. Three continents. One team.',
    url: 'https://samedia.io/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SA Media',
  url: 'https://samedia.io',
  logo: 'https://samedia.io/images/sa-media-logo.png',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Saim Abbasi',
    jobTitle: 'Founder & CEO',
  },
  description:
    'SA Media is a global media firm that runs brand strategy, design, development, and marketing as one integrated operating system for ambitious brands.',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Toronto', addressCountry: 'CA' },
    { '@type': 'PostalAddress', addressLocality: 'New York', addressCountry: 'US' },
    { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    { '@type': 'PostalAddress', addressLocality: 'Singapore', addressCountry: 'SG' },
    { '@type': 'PostalAddress', addressLocality: 'Monaco', addressCountry: 'MC' },
    { '@type': 'PostalAddress', addressLocality: 'Miami', addressCountry: 'US' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@samedia.io',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.instagram.com/samedia.io',
    'https://www.linkedin.com/company/sa-mediaio',
    'https://x.com/samedia_saim',
    'https://www.youtube.com/@SAMediaSaim',
  ],
}

const stats = [
  { value: '1B+', label: 'Social Media Reach', sub: 'Across all managed channels' },
  { value: '50M+', label: 'Likes Generated', sub: 'Organic and paid combined' },
  { value: '$1M+', label: 'Sales Generated', sub: 'Direct attribution' },
  { value: '100+', label: 'Creatives Per Month', sub: 'Produced in-house' },
  { value: '50+', label: 'Clients', sub: 'Across 3 continents' },
]

const values = [
  {
    n: '01',
    title: 'Revenue first, everything else second.',
    body: 'Every tactic, every creative, every campaign exists to move a business metric. We track our work back to revenue and cut anything that does not contribute. Vanity metrics are not something SA Media celebrates.',
  },
  {
    n: '02',
    title: 'Speed without cutting corners.',
    body: 'We move fast because the market rewards it. But we never sacrifice quality to hit a deadline. Our systems are built to deliver excellent work on tight timelines, consistently.',
  },
  {
    n: '03',
    title: 'One team, not five vendors.',
    body: 'When strategy, creative, development, and distribution live under one roof, everything is faster and more coherent. SA Media operates as a single integrated unit, not a patchwork of specialists who have never met.',
  },
  {
    n: '04',
    title: 'Transparency is the default.',
    body: 'We report the real numbers, good and bad. We tell you when something is not working before you ask. We explain our reasoning and share our thinking. There are no black boxes at SA Media.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[60vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-lime">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">ABOUT SA MEDIA</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl leading-none text-white mb-6 md:mb-8">
            <span className="block">BY THE CREATIVES</span>
            <span className="block text-lime">FOR THE BUILDERS.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed">
            SA Media is a global media firm founded in Toronto. We run brand strategy, design, development, and marketing as one operating system for brands that want measurable growth across every channel.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-off-white px-6 py-14 md:py-24 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">OUR STORY</p>
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-8 leading-snug">
              Built for brands that want results, not reports.
            </h2>
            <p className="font-body text-base text-dark/65 leading-relaxed mb-5">
              SA Media was built around a simple observation: most agencies are good at one or two things, but the brands growing fastest needed everything working together. Strategy without execution is a slide deck. Creative without distribution is wasted. Paid media without attribution is guesswork.
            </p>
            <p className="font-body text-base text-dark/65 leading-relaxed mb-5">
              So we built SA Media to run all of it as one system. Strategy, design, development, and marketing under one roof, operated by one team, accountable to one outcome: your growth.
            </p>
            <p className="font-body text-base text-dark/65 leading-relaxed">
              Today SA Media works with 50+ brands across Toronto, New York, Dubai, Singapore, Monaco, and Miami. Our clients range from first-time founders building their initial brand to established businesses scaling into new markets. The approach scales. The standards do not change.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">THE PHILOSOPHY</p>
            <blockquote className="font-heading text-3xl md:text-4xl text-dark leading-tight mb-6">
              Where <span className="underline decoration-lime decoration-4 underline-offset-4">Data</span> Meets <span className="text-teal">Design.</span>
            </blockquote>
            <p className="font-body text-base text-dark/65 leading-relaxed mb-6">
              This is the belief SA Media was founded on. Data tells you what is working and why. Design makes people care. The best marketing in the world sits at the intersection of both, and that is where we operate every single day.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-dark/30" />
              <div>
                <p className="font-mono text-sm text-dark">Saim Abbasi</p>
                <p className="font-body text-xs text-dark/40">Founder and CEO, SA Media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark px-6 py-12 md:py-16 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-10">THE NUMBERS</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-dark p-5 md:p-8">
                <p className="font-mono font-bold text-5xl text-lime leading-none mb-2">{s.value}</p>
                <p className="font-heading text-sm text-white mb-1">{s.label}</p>
                <p className="font-body text-xs text-white/30">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">WHAT WE STAND FOR</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-14">
            Four things SA Media will never compromise on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10">
            {values.map((v) => (
              <div key={v.n} className="bg-off-white p-6 md:p-10 border-t-2 border-lime">
                <p className="font-mono text-xs text-dark/25 mb-4">{v.n}</p>
                <h3 className="font-heading text-xl text-dark mb-4">{v.title}</h3>
                <p className="font-body text-sm text-dark/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we operate */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">WHERE WE OPERATE</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            Six cities. One standard.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {[
              { city: 'Toronto', note: 'Headquarters' },
              { city: 'New York', note: 'North America' },
              { city: 'Dubai', note: 'Middle East' },
              { city: 'Singapore', note: 'Asia Pacific' },
              { city: 'Monaco', note: 'Europe' },
              { city: 'Miami', note: 'Southeast US' },
            ].map((loc) => (
              <div key={loc.city} className="bg-dark p-6">
                <p className="font-heading text-lg text-white mb-1">{loc.city}</p>
                <p className="font-mono text-xs text-white/30">{loc.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-white/40 mt-8 max-w-lg leading-relaxed">
            SA Media serves clients globally. Wherever your brand operates, we have the market knowledge and timezone coverage to support it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY TO START?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-dark leading-tight max-w-xl">
              Let&apos;s build something<br />
              <span className="text-lime">worth talking about.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/team"
              className="font-heading text-lg text-dark border border-dark/30 px-8 py-4 hover:border-lime hover:text-lime transition-colors duration-200 text-center"
            >
              Meet the team →
            </Link>
            <a
              href="https://calendly.com/samedia-saim/sa-discovery-meeting"
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
