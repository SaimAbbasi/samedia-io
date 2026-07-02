import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SA Media | Global Media Firm for Enterprise & Growth-Stage Brands',
  description:
    'SA Media is a global media firm founded by Saim Abbasi, a Queen\'s University engineering graduate, former Scotiabank Capital Markets analyst, and serial entrepreneur behind three exits including a NASDAQ-listed company. We run brand strategy, design, development, and marketing as one integrated operating system for enterprise and growth-stage brands across Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  keywords: 'SA Media about, Saim Abbasi, global media firm, enterprise marketing agency, brand strategy agency Toronto, marketing agency New York, marketing agency Dubai, fractional CMO Canada, NASDAQ marketing agency, growth marketing firm, integrated media firm, Queen\'s University, Scotiabank Capital Markets',
  alternates: { canonical: 'https://samedia.io/about' },
  openGraph: {
    title: 'About SA Media | Global Media Firm Founded in Toronto',
    description:
      'Founded by Saim Abbasi: engineer, trader, operator, and serial entrepreneur behind three exits including a NASDAQ-listed company. 50+ brands. 1B+ reach. Three continents. One team.',
    url: 'https://samedia.io/about',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SA Media',
    url: 'https://samedia.io',
    logo: 'https://samedia.io/images/sa-media-logo.png',
    foundingDate: '2024',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    founder: {
      '@type': 'Person',
      name: 'Saim Abbasi',
      jobTitle: 'Founder & CEO',
    },
    description:
      'SA Media is a global media firm that runs brand strategy, design, development, and marketing as one integrated operating system for enterprise and growth-stage brands. Founded by Saim Abbasi, a former Scotiabank Capital Markets analyst and serial entrepreneur behind three exits including a NASDAQ-listed company.',
    areaServed: ['Toronto', 'New York', 'Dubai', 'Singapore', 'Monaco', 'Miami'],
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saim Abbasi',
    jobTitle: 'Founder & CEO',
    worksFor: { '@type': 'Organization', name: 'SA Media', url: 'https://samedia.io' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: "Queen's University" },
    description:
      "Saim Abbasi is the Founder and CEO of SA Media and Managing Partner at Iron Key Capital. A Queen's University Mechanical Engineering graduate and former Scotiabank Capital Markets analyst, he has led three company acquisitions in under two years including an exit to a NASDAQ-listed entity (Asset Entities, NASDAQ: $ASST). He has served as CMO for Squirrel Wallet and Progress Group Inc. and generated 250M+ content views and $10M+ across his media platforms.",
    sameAs: ['https://saimabbasi.com', 'https://x.com/samedia_saim'],
  },
]

const stats = [
  { value: '1B+', label: 'Social Media Reach', sub: 'Across all managed channels' },
  { value: '250M+', label: 'Content Views', sub: 'Across founder-led platforms' },
  { value: '$1M+', label: 'Sales Generated', sub: 'Direct attribution' },
  { value: '3', label: 'Exits in 24 Months', sub: 'Including a NASDAQ-listed company' },
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
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="min-h-[60vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-lime">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">ABOUT SA MEDIA</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl leading-none text-white mb-6 md:mb-8">
            <span className="block">BY THE CREATIVES</span>
            <span className="block text-lime">FOR THE BUILDERS</span>
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
              So we built SA Media to run all of it as one system. Strategy, design, development, and marketing under one roof, operated by one team, accountable to one outcome: your growth. That integrated model is not incidental. It is the product of a founder who has operated simultaneously as an engineer, a financial markets analyst, a CMO, a venture investor, and a media operator. Every discipline informed the firm.
            </p>
            <p className="font-body text-base text-dark/65 leading-relaxed mb-5">
              Founder Saim Abbasi brought to SA Media a background that few agency founders share: a Mechanical Engineering degree from Queen&apos;s University, time on the institutional trading desk at Scotiabank Capital Markets covering XVA, Collateral and Credit Sales, and a track record of three company acquisitions in under two years, culminating in a transaction with a NASDAQ-listed public company and a subsequent deal with Strive Asset Management. That experience, applied to brand building and media strategy, produces a calibre of strategic thinking most agencies cannot access.
            </p>
            <p className="font-body text-base text-dark/65 leading-relaxed">
              Today SA Media works with 50+ brands across Toronto, New York, Dubai, Singapore, Monaco, and Miami. Our clients range from growth-stage technology companies entering new markets to established enterprises modernizing their marketing function. The approach scales. The standards do not change.
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

      {/* Founder */}
      <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">THE FOUNDER</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-8">
                Built by someone who has been<br /><span className="text-lime">on both sides of the table.</span>
              </h2>
              <div className="flex flex-col gap-5 font-body text-base text-white/55 leading-relaxed">
                <p>
                  Saim Abbasi founded SA Media after a career that crossed financial markets, engineering, venture building, and digital media. A Mechanical Engineering graduate from Queen&apos;s University, he began his career as an XVA, Collateral and Credit Sales Trading Analyst at Scotiabank Capital Markets, a role that instilled a rigorous, quantitative approach to every business problem he has worked on since.
                </p>
                <p>
                  Before founding SA Media, Saim completed three company acquisitions in under two years, culminating in an exit to Asset Entities (NASDAQ: <span className="text-lime font-mono text-sm">$ASST</span>), a publicly traded company, and a subsequent transaction with Strive Asset Management. He has since become one of the youngest Managing Partners in global venture capital through Iron Key Capital.
                </p>
                <p>
                  Across his portfolio, Saim has served as Chief Marketing Officer for Squirrel Wallet and Progress Group Inc., Director of Strategy and Operations at Vosyn AI, and sits on the Board of Advisors at CMPUS. His content platforms have generated 250M+ views and his SA platform has collectively produced over $10M in economic value across 1,000+ founders and students mentored.
                </p>
                <p>
                  SA Media is the firm Saim built to give enterprise and growth-stage businesses access to the same level of strategic thinking that drove his own exits and platform growth, without the learning curve. When you work with SA Media, you get a team that has operated at every level of the business growth stack, from seed-stage brand building to NASDAQ-level corporate communications.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border border-white/10 p-6 md:p-8">
                <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">CAREER MILESTONES</p>
                {[
                  { year: '2020', label: 'Scotiabank Capital Markets', note: 'XVA, Collateral & Credit Sales Trading Analyst' },
                  { year: '2022', label: 'Three Acquisitions in 24 Months', note: 'SA Capital → OptionsSwing → Asset Entities (NASDAQ: $ASST) → Strive Asset Management' },
                  { year: '2024', label: 'Founded SA Media', note: 'President & CEO, global media firm across 6 markets' },
                  { year: '2024', label: 'Fractional CMO Roles', note: 'Squirrel Wallet & Progress Group Inc.' },
                  { year: '2025', label: 'Iron Key Capital', note: 'Managing Partner, one of the youngest globally' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-6 py-4 border-b border-white/10 last:border-0">
                    <span className="font-mono text-xs text-lime shrink-0 w-10">{item.year}</span>
                    <div>
                      <p className="font-heading text-sm text-white mb-0.5">{item.label}</p>
                      <p className="font-body text-xs text-white/35 leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l-4 border-lime pl-6 py-2">
                <p className="font-heading text-xl text-white leading-snug mb-3">
                  &ldquo;I don&apos;t manage time. I manufacture leverage.&rdquo;
                </p>
                <p className="font-mono text-xs text-white/30">Saim Abbasi, Founder & CEO</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">EDUCATION</p>
                <p className="font-heading text-base text-white mb-1">Queen&apos;s University</p>
                <p className="font-body text-sm text-white/40 leading-relaxed">Mechanical Engineering · Distinguished Alumnus & Global Ambassador · Co-Chairman, CIRQUE Engineering Conference</p>
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

      {/* Enterprise */}
      <section className="bg-off-white px-6 py-14 md:py-20 border-t border-dark/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">BUILT FOR ENTERPRISE</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark leading-tight mb-4 max-w-2xl">
            Why enterprise and growth-stage brands choose SA Media.
          </h2>
          <p className="font-body text-base text-dark/55 max-w-2xl leading-relaxed mb-12">
            Enterprise marketing has different demands: longer approval cycles, larger stakeholder groups, brand governance standards, compliance considerations, and the expectation of board-level reporting. SA Media is built to operate at that level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark/10">
            {[
              {
                title: 'Executive-level thinking on every engagement',
                body: 'Saim Abbasi is the strategic lead on every SA Media engagement. Enterprise clients get direct access to a founder with C-suite experience across financial services, AI, fintech, and media, not a junior account manager.',
              },
              {
                title: 'Systems designed to scale with complexity',
                body: "SA Media's integrated operating model was built for clients running across multiple markets, product lines, and stakeholder groups. Our systems absorb complexity without slowing down.",
              },
              {
                title: 'Cross-industry pattern recognition',
                body: 'With active client relationships and advisory roles across financial services, real estate, AI, Web3, hospitality, and consumer brands, SA Media brings cross-sector intelligence that single-vertical agencies cannot match.',
              },
              {
                title: 'M&A and investor-grade brand strategy',
                body: 'SA Media founder Saim Abbasi has navigated three acquisitions and two NASDAQ-adjacent transactions. We understand how brand positioning affects company valuation, investor narrative, and enterprise deal flow.',
              },
              {
                title: 'Fractional C-Suite embedded leadership',
                body: 'For enterprise organizations restructuring their marketing leadership, SA Media places embedded Fractional CMO, CTO, and CSO executives who integrate directly with your leadership team, operating as part of your business rather than as an outside vendor.',
              },
              {
                title: 'Global operations, local market execution',
                body: 'With presences in Toronto, New York, Dubai, Singapore, Monaco, and Miami, SA Media executes local-market strategies across geographies without the coordination overhead of managing multiple regional agency partners.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-off-white p-6 md:p-8 border-t-2 border-dark/20 hover:border-lime transition-colors duration-200">
                <h3 className="font-heading text-lg text-dark mb-3">{item.title}</h3>
                <p className="font-body text-sm text-dark/55 leading-relaxed">{item.body}</p>
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
