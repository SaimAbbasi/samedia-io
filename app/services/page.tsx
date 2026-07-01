import WhatsOnTheTable from '@/components/WhatsOnTheTable'
import Services from '@/components/Services'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { fractionalServices } from '@/lib/fractional-data'

export const metadata: Metadata = {
  title: 'Digital Marketing, Design, AI & Growth Services | SA Media Toronto, New York, Dubai',
  description:
    'SA Media offers 17 integrated services: brand strategy, social media management, paid media, SEO, web and app development, AI automation, AIEO and GEO optimization, event production, blockchain marketing, PR, and Fractional C-Suite placements. Serving Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  keywords: 'digital marketing agency Toronto, marketing agency New York, marketing agency Dubai, brand strategy, social media management, SEO agency, AI marketing, AIEO optimization, GEO optimization, fractional CMO, fractional CTO, web development agency, paid media agency, influencer marketing',
  alternates: {
    canonical: 'https://samedia.io/services',
  },
  openGraph: {
    title: 'Digital Marketing, Design, AI & Growth Services | SA Media',
    description: '17 integrated services. One global media firm. Strategy, design, development, marketing, AI, and executive leadership for brands across Toronto, New York, Dubai, and beyond.',
    url: 'https://samedia.io/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing, Design, AI & Growth Services | SA Media',
    description: '17 integrated services. One global media firm operating across Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SA Media Services',
  description: 'Full-service digital marketing, design, development, AI, and executive leadership services offered by SA Media.',
  provider: {
    '@type': 'Organization',
    name: 'SA Media',
    url: 'https://samedia.io',
    areaServed: ['Toronto', 'New York', 'Dubai', 'Singapore', 'Monaco', 'Miami'],
  },
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Brand Strategy and Positioning', url: 'https://samedia.io/services/brand-strategy-positioning' },
    { '@type': 'ListItem', position: 2, name: 'Brand Identity and Design', url: 'https://samedia.io/services/brand-identity-design' },
    { '@type': 'ListItem', position: 3, name: 'Social Media Management', url: 'https://samedia.io/services/social-media-management' },
    { '@type': 'ListItem', position: 4, name: 'Content Creation', url: 'https://samedia.io/services/content-creation' },
    { '@type': 'ListItem', position: 5, name: 'Media Buying and Paid Advertising', url: 'https://samedia.io/services/media-buying-ads' },
    { '@type': 'ListItem', position: 6, name: 'Influencer Marketing', url: 'https://samedia.io/services/influencer-marketing' },
    { '@type': 'ListItem', position: 7, name: 'Public Relations', url: 'https://samedia.io/services/public-relations' },
    { '@type': 'ListItem', position: 8, name: 'SEO and Content Strategy', url: 'https://samedia.io/services/seo-content-strategy' },
    { '@type': 'ListItem', position: 9, name: 'Email and CRM Automation', url: 'https://samedia.io/services/email-crm-automation' },
    { '@type': 'ListItem', position: 10, name: 'Web and E-commerce Development', url: 'https://samedia.io/services/web-ecommerce-development' },
    { '@type': 'ListItem', position: 11, name: 'App Development', url: 'https://samedia.io/services/app-development' },
    { '@type': 'ListItem', position: 12, name: 'Analytics and Attribution', url: 'https://samedia.io/services/analytics-attribution' },
    { '@type': 'ListItem', position: 13, name: 'AI Development and Automation', url: 'https://samedia.io/services/ai-development-automation' },
    { '@type': 'ListItem', position: 14, name: 'AI Agent Building', url: 'https://samedia.io/services/ai-agent-building' },
    { '@type': 'ListItem', position: 15, name: 'AIEO and GEO Optimization', url: 'https://samedia.io/services/aieo-geo-optimization' },
    { '@type': 'ListItem', position: 16, name: 'Event Planning and Production', url: 'https://samedia.io/services/event-planning-production' },
    { '@type': 'ListItem', position: 17, name: 'Blockchain and Crypto Marketing', url: 'https://samedia.io/services/blockchain-crypto-marketing' },
    { '@type': 'ListItem', position: 18, name: 'Fractional CMO', url: 'https://samedia.io/fractional/fractional-cmo' },
    { '@type': 'ListItem', position: 19, name: 'Fractional CTO', url: 'https://samedia.io/fractional/fractional-cto' },
    { '@type': 'ListItem', position: 20, name: 'Fractional CFO', url: 'https://samedia.io/fractional/fractional-cfo' },
    { '@type': 'ListItem', position: 21, name: 'Fractional CSO', url: 'https://samedia.io/fractional/fractional-cso' },
    { '@type': 'ListItem', position: 22, name: 'Fractional CRO', url: 'https://samedia.io/fractional/fractional-cro' },
    { '@type': 'ListItem', position: 23, name: 'Fractional COS', url: 'https://samedia.io/fractional/fractional-cos' },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SA Media',
  url: 'https://samedia.io',
  logo: 'https://samedia.io/images/sa-media-logo.png',
  description: 'SA Media is a global media firm offering digital marketing, brand strategy, AI development, web development, design, and fractional executive leadership to growth-stage companies across Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  areaServed: ['Toronto', 'New York', 'Dubai', 'Singapore', 'Monaco', 'Miami'],
  contactPoint: { '@type': 'ContactPoint', email: 'info@samedia.io', contactType: 'customer service' },
  sameAs: [
    'https://www.instagram.com/samedia.io',
    'https://www.linkedin.com/company/sa-mediaio',
    'https://x.com/samedia_saim',
    'https://www.youtube.com/@SAMediaSaim',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does SA Media offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media offers 17 integrated marketing and technology services: Brand Strategy and Positioning, Brand Identity and Design, Social Media Management, Content Creation, Media Buying and Paid Advertising, Influencer Marketing, Public Relations, SEO and Content Strategy, Email and CRM Automation, Web and E-commerce Development, App Development, Analytics and Attribution, AI Development and Automation, AI Agent Building, AIEO and GEO Optimization, Event Planning and Production, and Blockchain and Crypto Marketing. SA Media also provides Fractional C-Suite placements including Fractional CMO, CTO, CFO, CSO, and CRO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is SA Media located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media operates globally with presences in Toronto, New York, Dubai, Singapore, Monaco, and Miami. The firm serves clients across North America, the Middle East, Europe, and Asia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does SA Media work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media works with technology companies, real estate and proptech brands, financial services and fintech businesses, e-commerce and direct-to-consumer brands, professional services firms, hospitality and lifestyle brands, and cryptocurrency and blockchain projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AIEO and GEO optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AIEO stands for AI Engine Optimization — the practice of optimizing content and brand presence to appear in AI-generated answers from tools like ChatGPT, Claude, and Gemini. GEO stands for Generative Engine Optimization, a related discipline. SA Media offers both services to help brands gain visibility in AI search results alongside traditional search engines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SA Media offer fractional executive services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SA Media places Fractional CMOs, Fractional CTOs, Fractional CFOs, Fractional CSOs, Fractional CROs, and Fractional Chiefs of Staff (COS) with growth-stage companies that need executive leadership without a full-time hire. Engagements typically run six to eighteen months and are available to companies across all SA Media markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SA Media differ from a traditional marketing agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media operates as an integrated media firm rather than a single-discipline agency. Strategy, creative, development, marketing, AI, and executive leadership are delivered by one team under one operating system. Clients have a single point of contact and a unified strategy across all functions, eliminating the hand-offs and misalignment that occur when multiple agencies are managing different parts of a brand.',
      },
    },
  ],
}

const stats = [
  { value: '17', label: 'Integrated services under one operating system' },
  { value: '6', label: 'Global markets: Toronto, New York, Dubai, Singapore, Monaco, Miami' },
  { value: '60%', label: 'Average cost saving with Fractional C-Suite vs full-time hires' },
  { value: '90 days', label: 'From engagement start to a fully deployed marketing strategy' },
]

const markets = [
  {
    city: 'Toronto',
    desc: 'SA Media serves technology companies, real estate brands, financial services firms, and consumer businesses across the Greater Toronto Area and Ontario.',
  },
  {
    city: 'New York',
    desc: 'SA Media supports New York businesses across fintech, media, enterprise SaaS, health technology, and direct-to-consumer brands operating in one of the world\'s most competitive markets.',
  },
  {
    city: 'Dubai',
    desc: 'SA Media operates in the UAE serving fast-growing businesses across the MENA region, with experience navigating the cultural, regulatory, and market dynamics of the Gulf.',
  },
  {
    city: 'Singapore',
    desc: 'SA Media serves Singapore-based companies expanding across Southeast Asia, bringing regional market knowledge and an integrated approach to growth.',
  },
  {
    city: 'Monaco',
    desc: 'SA Media works with luxury brands, private wealth businesses, and high-net-worth consumer companies operating in Monaco and the broader European market.',
  },
  {
    city: 'Miami',
    desc: 'SA Media supports Miami businesses across real estate, hospitality, fintech, and Latin American market expansion, one of North America\'s fastest-growing business hubs.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            SA Media is a global media firm running 17 integrated services as one operating system. Brand strategy, design, paid media, SEO, web development, AI automation, AIEO and GEO optimization, event production, and Fractional C-Suite leadership — all delivered by one team, with one point of contact, and one shared goal: measurable growth for your brand.
          </p>
        </div>
      </section>

      {/* Services rows */}
      <Services />

      {/* Fractional C-Suite */}
      <section className="bg-dark px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">FRACTIONAL C-SUITE</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight max-w-2xl">
              Executive leadership.<br /><span className="text-lime">On your terms.</span>
            </h2>
            <Link href="/fractional" className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest shrink-0">
              VIEW ALL FRACTIONAL →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {fractionalServices.map((s) => (
              <Link key={s.slug} href={`/fractional/${s.slug}`} className="bg-dark p-8 hover:bg-white/5 transition-colors group">
                <span className="font-mono text-xs text-lime">{s.n}</span>
                <h3 className="font-heading text-xl text-white mt-3 mb-2">{s.name}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-4">{s.tagline}</p>
                <span className="font-mono text-xs text-teal group-hover:text-lime transition-colors">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is on the table */}
      <WhatsOnTheTable />

      {/* How SA Media Works — rich prose for SEO/AIEO */}
      <section className="bg-off-white px-6 py-20 border-t border-dark/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-6">HOW WE OPERATE</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-dark leading-tight mb-8">
                One team. One strategy.<br />Every channel.
              </h2>
              <div className="flex flex-col gap-6 font-body text-base text-dark/65 leading-relaxed">
                <p>
                  Most companies manage their marketing across three to five separate agencies — a creative agency for brand, a media agency for paid advertising, an SEO firm for organic search, a development studio for the website, and a social media manager for content. Every brief gets translated five times. Every strategy lives in a separate document. And when performance falls short, each agency points at the others.
                </p>
                <p>
                  SA Media was built to solve this problem. Our 17 services are run by one integrated team with a single operating framework. Brand positioning informs the content strategy. The content strategy informs the SEO approach. The SEO approach informs the paid media targeting. Paid media performance informs the next positioning iteration. Every function feeds every other function because they are all run by the same team from the same strategy.
                </p>
                <p>
                  This is why SA Media clients consistently see faster time to results, lower blended customer acquisition costs, and a marketing function that scales without the coordination overhead that multi-agency models create.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {[
                {
                  title: 'Strategy first, always',
                  body: 'Every SA Media engagement begins with a strategy audit and positioning exercise. We define your ideal customer profile, your competitive positioning, your channel mix, and your 90-day action plan before a single tactic is executed.',
                },
                {
                  title: 'Technology-native execution',
                  body: 'SA Media integrates AI tools, automation, and data infrastructure into every marketing program. From AI-generated content workflows to programmatic ad buying to AIEO optimization for generative search — we build marketing programs that operate at the speed that modern markets demand.',
                },
                {
                  title: 'Revenue-connected measurement',
                  body: 'We report on the metrics that drive business decisions: pipeline generated, revenue attributed, customer acquisition cost by channel, and return on marketing spend. Not impressions. Not engagement rate. Revenue.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-lime pl-6">
                  <h3 className="font-heading text-lg text-dark mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-dark/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-10">BY THE NUMBERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-dark p-8">
                <p className="font-mono text-4xl md:text-5xl font-bold text-lime leading-none mb-3">{s.value}</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Markets we serve — GEO content */}
      <section className="bg-off-white px-6 py-20 border-t border-dark/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-4">MARKETS WE SERVE</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark leading-tight mb-4 max-w-2xl">
            Global operations. Local market knowledge.
          </h2>
          <p className="font-body text-base text-dark/55 max-w-2xl leading-relaxed mb-12">
            SA Media operates across six markets with teams and client relationships embedded in each. Every market has its own competitive dynamics, media landscape, and audience behaviour. We bring that local context to every strategy we build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
            {markets.map((m) => (
              <div key={m.city} className="bg-off-white p-8">
                <p className="font-heading text-2xl text-dark mb-3">{m.city}</p>
                <p className="font-body text-sm text-dark/60 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight mb-12 max-w-2xl">
            Common questions answered.
          </h2>
          <div className="flex flex-col divide-y divide-white/10">
            {faqSchema.mainEntity.map((item) => (
              <details key={item.name} className="group py-8 cursor-pointer">
                <summary className="list-none flex items-center justify-between gap-6">
                  <h3 className="font-heading text-lg md:text-xl text-white leading-snug">{item.name}</h3>
                  <span className="font-mono text-xl text-white/30 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="font-body text-base text-white/50 leading-relaxed mt-6 max-w-3xl">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
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
