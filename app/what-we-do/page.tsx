import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do | SA Media Social Media, Content & Digital Growth',
  description:
    'SA Media delivers full-service social media management, content production, and digital growth strategy for brands in Toronto, New York, and Dubai. Learn how we turn channels into revenue.',
  openGraph: {
    title: 'What We Do | SA Media',
    description:
      'Full-service social media, content creation, and digital growth for ambitious brands across three continents.',
    url: 'https://samedia.io/what-we-do',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media, Content & Digital Growth',
  provider: {
    '@type': 'Organization',
    name: 'SA Media',
    url: 'https://samedia.io',
    sameAs: [
      'https://www.instagram.com/samedia.io',
      'https://www.linkedin.com/company/samedia-io',
    ],
  },
  areaServed: ['Toronto', 'New York', 'Dubai', 'Global'],
  description:
    'SA Media manages social media, produces content at scale, and builds digital growth systems for brands across real estate, fintech, fashion, hospitality, and more.',
  serviceType: [
    'Social Media Management',
    'Content Creation',
    'Digital Growth Strategy',
    'Paid Media',
    'Influencer Marketing',
    'SEO & Content Strategy',
  ],
}

const pillars = [
  {
    n: '01',
    title: 'Social Media Management',
    color: 'text-lime',
    border: 'border-lime',
    body: `We manage your entire social presence end-to-end. That means platform strategy, content calendars, community management, and performance reporting, all run by a dedicated team that treats your brand like their own. We work across Instagram, TikTok, LinkedIn, X, YouTube, Facebook, Snapchat, Pinterest, and emerging platforms.`,
    points: [
      'Platform-specific content strategy for each channel',
      'Daily scheduling, publishing, and monitoring',
      'Community engagement and DM management',
      'Monthly performance reports with actionable insight',
      'Trend monitoring and reactive content',
    ],
  },
  {
    n: '02',
    title: 'Content Production',
    color: 'text-teal',
    border: 'border-teal',
    body: `We produce 100+ pieces of content every month for the brands we work with. Our in-house creative team handles ideation, production, editing, and delivery across short-form video, high-end photography, long-form editorial, and UGC-style reels. No outsourcing, no guesswork.`,
    points: [
      'Short-form video (Reels, TikToks, YouTube Shorts)',
      'Brand photography and product shoots',
      'Motion graphics and animated content',
      'Long-form editorial and blog content',
      'UGC-style content at scale',
      'Podcast production and show management',
    ],
  },
  {
    n: '03',
    title: 'Digital Growth Strategy',
    color: 'text-lime',
    border: 'border-lime',
    body: `Growth is not a single channel. It is a system. We build full-funnel growth strategies that combine organic content, paid media, SEO, email, influencer, and affiliate into one coordinated machine. Every tactic connects to a revenue outcome, and every outcome is tracked.`,
    points: [
      'Full-funnel growth architecture',
      'Channel mix planning and budget allocation',
      'Conversion rate optimisation',
      'Attribution modelling with GA4 and GTM',
      'Monthly OKR review and strategy iteration',
    ],
  },
  {
    n: '04',
    title: 'Paid Media & Advertising',
    color: 'text-teal',
    border: 'border-teal',
    body: `We manage paid campaigns across Meta, Google, TikTok, LinkedIn, Snapchat, and YouTube. Our media buyers combine creative testing with algorithmic precision to lower your cost per acquisition and scale what works. We do not set and forget. We optimise daily.`,
    points: [
      'Meta Ads (Facebook and Instagram)',
      'Google Search, Display, and Shopping',
      'TikTok Ads and Spark Ads',
      'LinkedIn B2B campaigns',
      'Retargeting and lookalike audience strategy',
      'Creative A/B testing and iteration',
    ],
  },
  {
    n: '05',
    title: 'Influencer & Creator Marketing',
    color: 'text-lime',
    border: 'border-lime',
    body: `We source, brief, and manage influencer partnerships that move the needle. Whether that is nano-creators who convert like nothing else or macro names that build brand awareness, we handle the entire workflow. No spray-and-pray. Every campaign is scoped to your goals and measured against real outcomes.`,
    points: [
      'Influencer sourcing and vetting',
      'Campaign briefing and creative direction',
      'Negotiation and contract management',
      'Performance tracking and ROI reporting',
      'Long-term creator partnership programmes',
    ],
  },
  {
    n: '06',
    title: 'SEO & Content Strategy',
    color: 'text-teal',
    border: 'border-teal',
    body: `We build SEO strategies that compound over time. Technical audits, keyword architecture, on-page optimisation, link building, and AIEO optimisation for visibility in AI-generated search results. We cover the full stack. Our content strategy ensures every article, landing page, and blog post works toward a measurable organic outcome.`,
    points: [
      'Technical SEO audits and implementation',
      'Keyword research and content gap analysis',
      'On-page optimisation and schema markup',
      'Link building and digital PR',
      'AIEO and GEO optimisation for AI-powered search',
      'Content performance tracking and iteration',
    ],
  },
]

const industries = [
  'Real Estate',
  'Fintech',
  'Hospitality',
  'Fashion & Luxury',
  'E-commerce',
  'Legal & Professional Services',
  'SaaS & Technology',
  'Healthcare & Wellness',
  'Fitness & Sports',
  'Education',
  'Food & Beverage',
  'Automotive',
]

export default function WhatWeDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[55vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-lime">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">WHAT WE DO</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
            <span className="block">Social Media,</span>
            <span className="block">Content &</span>
            <span className="block text-lime">Digital Growth</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed mt-8">
            SA Media is a global media firm that manages social media, produces content at scale, and builds digital
            growth systems for brands across Toronto, New York, and Dubai. We operate across every major
            platform and every stage of the funnel.
          </p>
        </div>
      </section>

      {/* Intro block */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-6 leading-snug">
              One team. One operating system.{' '}
              <span className="text-teal">Every channel.</span>
            </h2>
            <p className="font-body text-base text-dark/65 leading-relaxed mb-4">
              Most agencies specialise in one lane. We run all of them. When strategy, content, distribution,
              and paid media are managed by the same team under one roof, everything moves faster and nothing
              falls between the cracks.
            </p>
            <p className="font-body text-base text-dark/65 leading-relaxed">
              Our model is built for brands that want measurable outcomes, not vanity metrics. Every deliverable
              connects to a business goal. Every campaign is tracked from first impression to final sale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '1B+', l: 'Social Media Reach' },
              { v: '50M+', l: 'Likes Generated' },
              { v: '$1M+', l: 'Direct Sales Attributed' },
              { v: '100+', l: 'Creatives Per Month' },
            ].map((s) => (
              <div key={s.l} className="border border-dark/15 p-6">
                <p className="font-mono font-bold text-4xl text-dark leading-none mb-2">{s.v}</p>
                <p className="font-body text-sm text-dark/50">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">WHAT WE COVER</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-16">
            Six pillars of{' '}
            <span className="text-lime">full-service growth.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {pillars.map((p) => (
              <div key={p.n} className={`bg-dark p-6 md:p-10 border-t-2 ${p.border}`}>
                <p className="font-mono text-xs text-white/20 mb-4">{p.n}</p>
                <h3 className={`font-heading text-2xl ${p.color} mb-4`}>{p.title}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed mb-6">{p.body}</p>
                <ul className="flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 font-body text-sm text-white/40">
                      <span className="text-lime/60 mt-0.5 shrink-0">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">INDUSTRIES</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-12">
            Industries we{' '}
            <span className="text-lime">know inside out.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="font-heading text-base text-dark border border-dark/20 px-5 py-3 hover:border-lime hover:text-lime transition-colors duration-200 cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
          <p className="font-body text-sm text-dark/45 mt-8 max-w-lg leading-relaxed">
            Our playbook adapts to your industry, your audience, and your goals. We have worked with bootstrapped
            startups and globally recognised names the strategy changes, the standards do not.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">THE PROCESS</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-16">
            How we work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {[
              { step: '01', title: 'Discovery', desc: 'We audit your brand, channels, and competitors. We identify the gaps and the opportunities no one has acted on yet.' },
              { step: '02', title: 'Strategy', desc: 'We build a custom playbook channel mix, content pillars, paid media plan, KPIs, and a 90-day roadmap tailored to your goals.' },
              { step: '03', title: 'Execution', desc: 'Our team executes across content, ads, community, and SEO simultaneously. Everything ships on schedule, at quality.' },
              { step: '04', title: 'Optimise', desc: 'We review performance weekly, iterate monthly, and scale what is working. The strategy compounds over time.' },
            ].map((item) => (
              <div key={item.step} className="bg-dark p-8">
                <p className="font-mono text-xs text-lime/40 mb-4">{item.step}</p>
                <h3 className="font-heading text-xl text-white mb-3">{item.title}</h3>
                <p className="font-body text-sm text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-dark leading-tight max-w-xl">
              Let&apos;s build the growth<br />your brand deserves.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="/services"
              className="font-heading text-lg text-dark border border-dark/30 px-8 py-4 hover:border-lime hover:text-lime transition-colors duration-200"
            >
              View all services →
            </Link>
            <Link
              href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
              className="font-heading text-lg text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
