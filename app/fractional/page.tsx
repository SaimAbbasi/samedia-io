import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { fractionalServices } from '@/lib/fractional-data'

export const metadata: Metadata = {
  title: 'Fractional C-Suite Services | SA Media Toronto, New York, Dubai',
  description:
    'SA Media places Fractional CMOs, CTOs, CFOs, CSOs, and CROs inside growth-stage businesses. Senior executive leadership at a fraction of the full-time cost, Toronto, New York, Dubai.',
  keywords: [
    'Fractional CMO Toronto',
    'Fractional CTO New York',
    'Fractional CFO Dubai',
    'Fractional CSO',
    'Fractional CRO',
    'fractional executive leadership',
    'part-time C-suite',
    'fractional C-suite services',
    'SA Media fractional',
    'executive leadership without full-time cost',
  ].join(', '),
  openGraph: {
    title: 'Fractional C-Suite Services | SA Media',
    description:
      'Senior executive leadership for growth-stage businesses. Fractional CMO, CTO, CFO, CSO, and CRO placements across Toronto, New York, and Dubai.',
    type: 'website',
    url: 'https://samedia.io/fractional',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional C-Suite Services | SA Media',
    description:
      'Senior executive leadership for growth-stage businesses. Fractional CMO, CTO, CFO, CSO, and CRO placements across Toronto, New York, and Dubai.',
  },
  alternates: {
    canonical: 'https://samedia.io/fractional',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SA Media Fractional C-Suite Services',
  description:
    'Fractional executive leadership placements, CMO, CTO, CFO, CSO, and CRO, for growth-stage businesses across Toronto, New York, and Dubai.',
  provider: { '@type': 'Organization', name: 'SA Media', url: 'https://samedia.io' },
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Fractional CMO', url: 'https://samedia.io/fractional/fractional-cmo' },
    { '@type': 'ListItem', position: 2, name: 'Fractional CTO', url: 'https://samedia.io/fractional/fractional-cto' },
    { '@type': 'ListItem', position: 3, name: 'Fractional CFO', url: 'https://samedia.io/fractional/fractional-cfo' },
    { '@type': 'ListItem', position: 4, name: 'Fractional CSO', url: 'https://samedia.io/fractional/fractional-cso' },
    { '@type': 'ListItem', position: 5, name: 'Fractional CRO', url: 'https://samedia.io/fractional/fractional-cro' },
  ],
}

const whyFractional = [
  {
    n: '01',
    heading: '60-70% cost saving',
    detail:
      'A full-time C-suite executive costs $200K-$400K in annual compensation before bonuses and equity. A fractional engagement delivers the same strategic output at a fraction of that cost.',
  },
  {
    n: '02',
    heading: 'Active in days, not months',
    detail:
      'The average executive search takes 4-6 months. A fractional placement is active within weeks, and the strategy work begins immediately, not after an onboarding period.',
  },
  {
    n: '03',
    heading: 'No long-term commitment risk',
    detail:
      'Fractional engagements are structured by scope and outcome, not by headcount. You can scale up, scale down, or transition to a full-time hire when the time is right.',
  },
  {
    n: '04',
    heading: 'Senior experience from day one',
    detail:
      'Fractional executives have typically held multiple C-suite roles across different industries. You get the accumulated pattern recognition of a seasoned leader, not someone learning on the job.',
  },
  {
    n: '05',
    heading: 'Objective perspective',
    detail:
      'An external executive brings an unbiased view of your organization, free from internal politics, sunk-cost thinking, and the habits that accumulate in long-tenured leadership teams.',
  },
  {
    n: '06',
    heading: 'Builds what you keep',
    detail:
      'The best fractional leaders build the systems, playbooks, and team capabilities that outlast the engagement, so when you hire full-time, your next executive steps into a functioning machine.',
  },
]

export default function FractionalPage() {
  return (
    <>
      <Script
        id="fractional-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[60vh] bg-dark px-6 pt-24 md:pt-36 pb-16 md:pb-24 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">
            FRACTIONAL C-SUITE
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl text-white leading-none mb-8">
            Executive leadership.<br />
            <span className="text-lime">Without the full-time overhead.</span>
          </h1>
          <p className="font-body text-xl text-white/50 max-w-2xl leading-relaxed">
            SA Media places experienced C-suite executives inside your business on a fractional basis. Senior strategic leadership, part-time commitment, full strategic impact, at 60-70% of the cost of a full-time hire.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-dark px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-12">
            THE FIVE ROLES
          </p>
          <div className="flex flex-col divide-y divide-white/10">
            {fractionalServices.map((s) => (
              <Link
                key={s.slug}
                href={`/fractional/${s.slug}`}
                className="group py-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-lime shrink-0">{s.n}</span>
                  <h2 className="font-heading text-2xl text-white group-hover:text-lime transition-colors leading-snug">
                    {s.name}
                  </h2>
                </div>
                <p className="font-body text-base text-white/50 leading-relaxed md:col-span-2">
                  {s.tagline}
                </p>
                <div className="flex flex-col md:items-end gap-2">
                  <p className="font-mono text-3xl font-bold text-white leading-none">
                    {s.outcomes[0].stat}
                  </p>
                  <p className="font-body text-xs text-white/40 md:text-right max-w-[160px]">
                    {s.outcomes[0].label}
                  </p>
                  <span className="font-mono text-xs text-teal group-hover:text-lime transition-colors mt-2">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fractional? */}
      <section className="bg-off-white px-6 py-24 border-t border-dark">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-6">
            WHY FRACTIONAL?
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-dark leading-tight mb-4 max-w-3xl">
            The executive leadership you need.<br />
            <span className="text-teal">Structured for how you actually grow.</span>
          </h2>
          <p className="font-body text-lg text-dark/60 max-w-2xl leading-relaxed mb-16">
            Growth-stage companies are caught between needing senior leadership and being unable to justify a full-time C-suite hire. The fractional model solves that problem, giving you the strategic output of an experienced executive without the fixed overhead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark/10">
            {whyFractional.map((item) => (
              <div key={item.n} className="bg-off-white p-10 flex flex-col gap-4">
                <p className="font-mono text-xs text-teal">{item.n}</p>
                <h3 className="font-heading text-xl text-dark leading-snug">{item.heading}</h3>
                <p className="font-body text-sm text-dark/60 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-dark px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">
            HOW IT WORKS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-8">
                Embedded leadership.<br />
                <span className="text-lime">Not an outside report.</span>
              </h2>
              <p className="font-body text-lg text-white/50 leading-relaxed mb-8">
                A fractional executive from SA Media is not a consultant who delivers a deck and disappears. They become a genuine member of your leadership team, attending meetings, owning decisions, managing people, and being accountable for outcomes.
              </p>
              <p className="font-body text-lg text-white/50 leading-relaxed">
                The difference is accountability. A fractional executive has a stake in your success, not just a project scope. They are measured by the same outcomes your board measures you by.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { step: '01', title: 'Discovery call', desc: 'We understand your business, current leadership gaps, and what success looks like in the next 12 months.' },
                { step: '02', title: 'Match & proposal', desc: 'We match you with the right fractional executive based on your industry, stage, and specific needs. You receive a scoped proposal.' },
                { step: '03', title: 'Kickoff & immersion', desc: 'The fractional executive starts immediately, auditing your current state and building the strategy within the first 30 days.' },
                { step: '04', title: 'Ongoing leadership', desc: 'Weekly check-ins, monthly reviews, and quarterly strategy sessions. Full accountability to your leadership team and board.' },
              ].map((item) => (
                <div key={item.step} className="border-l-2 border-white/10 pl-6 hover:border-lime transition-colors">
                  <p className="font-mono text-xs text-lime mb-2">{item.step}</p>
                  <h3 className="font-heading text-lg text-white mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-24 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">READY?</p>
            <h2 className="font-heading text-4xl md:text-6xl text-dark leading-tight max-w-xl">
              Let&apos;s find the right executive for your business.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="https://calendly.com/samedia-saim/sa-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
            >
              Book a discovery call →
            </Link>
            <Link
              href="/services"
              className="font-body text-sm text-dark/50 hover:text-dark transition-colors"
            >
              ← View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
