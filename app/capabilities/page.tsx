import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capabilities | SA Media Strategy, Design, Build, Market, AI & Events',
  description:
    'Explore SA Media\'s full capability stack: brand strategy, design, web development, marketing, AI automation, and event production all under one roof for brands in Toronto, New York, and Dubai.',
  openGraph: {
    title: 'Capabilities | SA Media',
    description:
      'Six capability pillars. One global media firm. Strategy, Design, Build, Market, AI, and Events for ambitious brands.',
    url: 'https://samedia.io/capabilities',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SA Media Capabilities',
  description: 'Full-service capabilities offered by SA Media across strategy, design, development, marketing, AI, and events.',
  provider: {
    '@type': 'Organization',
    name: 'SA Media',
    url: 'https://samedia.io',
  },
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strategy' },
    { '@type': 'ListItem', position: 2, name: 'Design' },
    { '@type': 'ListItem', position: 3, name: 'Build' },
    { '@type': 'ListItem', position: 4, name: 'Market' },
    { '@type': 'ListItem', position: 5, name: 'AI & Automation' },
    { '@type': 'ListItem', position: 6, name: 'Events' },
  ],
}

const capabilities = [
  {
    n: '01',
    name: 'Strategy',
    accent: 'bg-lime',
    accentText: 'text-lime',
    summary: 'Every campaign we run starts with a strategy built around your specific market, audience, and goals. We do not recycle playbooks.',
    items: [
      { title: 'Digital Marketing Plan', desc: 'A custom roadmap covering all channels, timelines, KPIs, and budget allocation tailored to your growth objectives.' },
      { title: 'Brand Positioning & ICP', desc: 'We define where you sit in the market, who your ideal customer is, and how to speak directly to them at every touchpoint.' },
      { title: 'AI Opportunity Scan', desc: 'An audit of where AI tools and automation can reduce costs, accelerate output, and create competitive advantages for your brand.' },
      { title: 'Analytics & Attribution', desc: 'GA4 and GTM setup, conversion tracking, attribution modelling, and custom dashboards so you always know what is working.' },
    ],
  },
  {
    n: '02',
    name: 'Design',
    accent: 'bg-teal',
    accentText: 'text-teal',
    summary: 'Design is not decoration. Every pixel we produce serves a purpose brand recognition, conversion, or both.',
    items: [
      { title: 'Brand Identity & Logos', desc: 'Full brand identity systems including logo design, colour palettes, typography, and brand guidelines built to last.' },
      { title: 'UX Flows & Wireframes', desc: 'User experience mapping, wireframes, and information architecture before a single line of code gets written.' },
      { title: 'High-Fidelity UI Design', desc: 'Polished, pixel-perfect interface design for web, mobile, and digital products that converts visitors into customers.' },
      { title: 'Motion & Micro-interactions', desc: 'Purposeful animation and interaction design that elevates the user experience without distracting from the goal.' },
      { title: 'Print & Collateral', desc: 'Business cards, pitch decks, brochures, event materials, and out-of-home advertising that extends your brand offline.' },
    ],
  },
  {
    n: '03',
    name: 'Build',
    accent: 'bg-lime',
    accentText: 'text-lime',
    summary: 'We build digital products that are fast, accessible, and engineered to perform. From marketing sites to full e-commerce platforms.',
    items: [
      { title: 'Web Development', desc: 'Custom websites built on Next.js, React, and modern stacks. Fast, SEO-optimised, and designed to convert.' },
      { title: 'E-commerce Development', desc: 'Shopify, custom storefronts, and headless commerce solutions built for brands serious about online revenue.' },
      { title: 'App Development', desc: 'Mobile and web app development for iOS, Android, and cross-platform from MVP to production-ready.' },
      { title: 'API Integrations', desc: 'CRM, payment, analytics, and third-party service integrations that connect your digital ecosystem.' },
      { title: 'Performance & Core Web Vitals', desc: 'Speed optimisation, image compression, lazy loading, and technical improvements that boost rankings and reduce bounce.' },
      { title: 'Security & Accessibility', desc: 'WCAG compliance, SSL, secure authentication, and hardening against common vulnerabilities.' },
    ],
  },
  {
    n: '04',
    name: 'Market',
    accent: 'bg-teal',
    accentText: 'text-teal',
    summary: 'We get your brand in front of the right people at the right time across every major channel and we measure every dollar.',
    items: [
      { title: 'Social Media & UGC', desc: 'Full social media management including content creation, scheduling, community management, and UGC campaign production.' },
      { title: 'Google, Meta & TikTok Ads', desc: 'Paid media management across all major platforms with daily optimisation, creative testing, and transparent reporting.' },
      { title: 'SEO & Content Strategy', desc: 'Keyword research, technical SEO, content calendars, link building, and AIEO optimisation for long-term organic growth.' },
      { title: 'Email & SMS Automations', desc: 'Klaviyo and CRM automation flows, drip campaigns, and lifecycle marketing that converts and retains customers.' },
      { title: 'Influencer Campaigns', desc: 'End-to-end influencer programme management from sourcing and briefing to delivery and performance reporting.' },
      { title: 'Affiliate Marketing', desc: 'Affiliate programme setup, partner recruitment, commission structure design, and performance tracking.' },
      { title: 'Landing Pages & CRO', desc: 'High-converting landing page design and A/B testing to squeeze more revenue out of your existing traffic.' },
      { title: 'Local SEO', desc: 'Google Business optimisation, local citation building, and geo-targeted content for brands with physical locations.' },
    ],
  },
  {
    n: '05',
    name: 'AI',
    accent: 'bg-lime',
    accentText: 'text-lime',
    summary: 'We build AI into your brand operations not as a novelty, but as infrastructure that gives you a permanent competitive edge.',
    items: [
      { title: 'AI Development & Automation', desc: 'Custom AI tools, workflow automation, and integrations that eliminate repetitive work and scale your output.' },
      { title: 'AI Agent Building', desc: 'Intelligent agents that handle customer service, lead qualification, content production, and internal operations autonomously.' },
      { title: 'AIEO Optimisation', desc: 'AI Engine Optimisation: structuring your content and brand signals to appear in AI-generated answers on ChatGPT, Perplexity, and Gemini.' },
      { title: 'GEO Optimisation', desc: 'Generative Engine Optimisation: ensuring your brand is referenced and recommended when AI tools respond to queries in your category.' },
      { title: 'ChatGPT & Gemini Visibility', desc: 'We audit and improve how your brand is represented across large language models and AI-powered search engines.' },
      { title: 'AI Workflow Integration', desc: 'We integrate AI tools including Midjourney, Runway, ElevenLabs, HeyGen, and Make.com into your production workflows.' },
      { title: 'Prompt Engineering', desc: 'Building and maintaining prompt libraries that produce consistent, high-quality output from AI tools across your team.' },
      { title: 'AI Opportunity Audit', desc: 'A systematic review of your business operations to identify where AI can reduce cost and increase speed and quality.' },
    ],
  },
  {
    n: '06',
    name: 'Events',
    accent: 'bg-teal',
    accentText: 'text-teal',
    summary: 'From brand activations to full-scale conferences, we produce events that people remember and talk about.',
    items: [
      { title: 'Event Strategy & Concept', desc: 'Defining the purpose, format, audience, and narrative of your event before a single venue is booked.' },
      { title: 'Corporate Events & Conferences', desc: 'Full production of corporate gatherings, summits, and industry conferences from 50 to 5,000 attendees.' },
      { title: 'Brand Activations & Launches', desc: 'Experiential marketing events that generate content, press coverage, and genuine word-of-mouth.' },
      { title: 'Venue Sourcing & Management', desc: 'Location scouting, contract negotiation, vendor coordination, and on-site management.' },
      { title: 'Live Streaming & Production', desc: 'Professional multi-camera live stream production for hybrid events that reach global audiences.' },
      { title: 'Event Marketing & Promotion', desc: 'Pre-event marketing campaigns, ticket sales strategy, influencer attendance, and post-event content.' },
      { title: 'Sponsorship Management', desc: 'Sponsorship deck creation, partner outreach, activation management, and reporting.' },
      { title: 'Post-Event Analytics', desc: 'Attendance, engagement, media coverage, and ROI reporting to measure event impact and inform future planning.' },
    ],
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[55vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">CAPABILITIES</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
            Everything you need,{' '}
            <span className="text-lime">under one roof.</span>
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed mt-8">
            Six integrated capability pillars: Strategy, Design, Build, Market, AI, and Events. Run by one
            team with one shared goal, which is measurable growth for your brand. No hand-offs. No silos. No excuses.
          </p>
        </div>
      </section>

      {/* Pillars */}
      {capabilities.map((cap, ci) => (
        <section
          key={cap.n}
          className={`px-6 py-12 md:py-20 border-t-[3px] ${ci % 2 === 0 ? 'bg-off-white border-lime' : 'bg-dark border-teal'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-10">
              <span className={`font-mono text-xs ${ci % 2 === 0 ? 'text-dark/30' : 'text-white/20'}`}>{cap.n}</span>
              <h2 className={`font-heading text-3xl md:text-5xl ${ci % 2 === 0 ? 'text-dark' : 'text-white'}`}>
                {cap.name}
              </h2>
              <div className={`flex-1 h-px ${ci % 2 === 0 ? 'bg-dark/10' : 'bg-white/10'}`} />
            </div>
            <p className={`font-body text-lg max-w-2xl leading-relaxed mb-12 ${ci % 2 === 0 ? 'text-dark/75' : 'text-white/70'}`}>
              {cap.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-current/5">
              {cap.items.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 md:p-8 border-t-2 ${cap.accent} ${ci % 2 === 0 ? 'bg-off-white' : 'bg-dark'}`}
                >
                  <h3 className={`font-heading text-lg mb-3 ${ci % 2 === 0 ? 'text-dark' : cap.accentText}`}>{item.title}</h3>
                  <p className={`font-body text-sm leading-relaxed ${ci % 2 === 0 ? 'text-dark/70' : 'text-white/65'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY TO START?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl">
              One team.<br />
              <span className="text-lime">Everything you need.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="/services"
              className="font-heading text-lg text-white border border-white/30 px-8 py-4 hover:border-lime hover:text-lime transition-colors duration-200"
            >
              Explore services →
            </Link>
            <Link
              href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting" target="_blank" rel="noopener noreferrer"
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
