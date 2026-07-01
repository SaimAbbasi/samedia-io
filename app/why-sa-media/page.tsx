import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why SA Media | The Global Media Firm That Delivers Results',
  description:
    'SA Media is not a typical digital marketing agency. We are a global media firm that runs strategy, design, development, and marketing as one system. Discover why 50+ brands across Toronto, New York, and Dubai choose us.',
  openGraph: {
    title: 'Why SA Media | Numbers That Speak for Themselves',
    description:
      '1B+ social reach, $1M+ sales attributed, 50+ clients across 3 continents. Discover what makes SA Media the global media firm brands trust.',
    url: 'https://samedia.io/why-sa-media',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why should I choose SA Media over other digital marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media is not a single-channel agency. We run strategy, design, development, and marketing as one integrated operating system. This means faster execution, consistent brand voice across every channel, and measurable results tied to actual revenue, not vanity metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes SA Media different from other marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not use generic playbooks, cookie-cutter content, or buzzword-filled decks. Every strategy is built from scratch for your brand, your audience, and your goals. We move fast, get things right the first time, and report transparently on every outcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SA Media work with small businesses or only large brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We work with bootstrapped founders and globally recognised names alike. Our approach scales to your stage and budget: from launch campaigns for new brands to full-funnel growth systems for established businesses expanding into new markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is SA Media based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SA Media is headquartered in Toronto with active operations in New York and Dubai. We serve clients across North America, the Middle East, and Europe, operating across three continents and three time zones.',
      },
    },
  ],
}

const stats = [
  { v: '1B+', l: 'Social Media Reach', sub: 'Across all managed channels' },
  { v: '50M+', l: 'Likes Generated', sub: 'Organic and paid combined' },
  { v: '$1M+', l: 'Sales Generated', sub: 'Direct attribution' },
  { v: '100+', l: 'Creatives Per Month', sub: 'Produced in-house' },
  { v: '50+', l: 'Clients', sub: 'Across 3 continents' },
]

const differentiators = [
  {
    n: '01',
    title: 'One team. No silos.',
    body: 'When strategy, creative, development, and paid media all live under one roof, everything moves faster. No hand-offs between agencies. No version control nightmare between your designer and your developer. One team, one goal, one point of contact.',
    color: 'text-lime',
  },
  {
    n: '02',
    title: 'Revenue over vanity.',
    body: 'Impressions that do not convert are expensive noise. We track every campaign back to actual business outcomes: leads, sales, sign-ups, and retention. If a tactic is not moving the number that matters, we cut it and redirect the budget.',
    color: 'text-teal',
  },
  {
    n: '03',
    title: 'We move at market speed.',
    body: 'The brands that win are the ones that execute fastest. We operate on short feedback loops, weekly reporting, and fast creative turnarounds. We treat your brand with the same urgency we would give our own.',
    color: 'text-lime',
  },
  {
    n: '04',
    title: 'Built for the AI era.',
    body: 'We are not retrofitting AI into old workflows. We build AI into the core of how we operate: content production, AIEO optimisation, automation, and agent building. Your brand is prepared for how search, discovery, and marketing work in 2025 and beyond.',
    color: 'text-teal',
  },
  {
    n: '05',
    title: 'Global reach, local understanding.',
    body: 'Toronto. New York. Dubai. Three major markets, three distinct audiences, one team that understands the nuance of each. Whether you are entering a new market or dominating your home turf, we have the on-the-ground knowledge to execute properly.',
    color: 'text-lime',
  },
  {
    n: '06',
    title: 'Transparency is non-negotiable.',
    body: 'You always know where your money is going and what it is doing. We do not hide behind jargon or obscure reporting. Every client gets clean dashboards, honest numbers, and a team that explains performance in plain English.',
    color: 'text-teal',
  },
]

const dontDo = [
  { label: 'Vanity Metrics', sub: 'Impressions without revenue mean nothing.' },
  { label: 'Cookie-Cutter Content', sub: 'Generic templates. Zero distinctiveness.' },
  { label: 'Endless Revisions', sub: 'We get it right, not loop you forever.' },
  { label: 'Generic Strategies', sub: 'Copy-paste playbooks from another client.' },
  { label: 'Buzzword Decks', sub: 'Slides full of fluff, zero execution.' },
  { label: 'Slow Turnarounds', sub: 'The market does not wait. Neither do we.' },
]

const testimonials = [
  {
    quote: 'SA Media understood our vision faster than any agency I have worked with. The brand development process was tight, and the content strategy has been running itself since day one.',
    name: 'Vullnet Nura',
    role: 'CEO, Vullnet Nura Group',
  },
  {
    quote: 'I came in with a rough idea of who we were as a brand. SA Media turned that into a full identity, a content system, and a site that actually converts.',
    name: 'Joseph Argiro',
    role: 'Founder, Iron Key Capital',
  },
  {
    quote: 'They transformed our social presence completely. Results we had not seen in years.',
    name: 'Roshan U.',
    role: 'COO, Pulse',
  },
  {
    quote: 'Strategic, data-driven, and actually fun to work with.',
    name: 'Mike K.',
    role: 'Founder, Pricimetrics',
  },
]

const faqs = [
  {
    q: 'Why should I choose SA Media over other digital marketing agencies?',
    a: 'SA Media is not a single-channel agency. We run strategy, design, development, and marketing as one integrated operating system. This means faster execution, consistent brand voice across every channel, and measurable results tied to actual revenue, not vanity metrics.',
  },
  {
    q: 'What makes SA Media different from other marketing agencies?',
    a: 'We do not use generic playbooks, cookie-cutter content, or buzzword-filled decks. Every strategy is built from scratch for your brand, your audience, and your goals. We move fast, get things right the first time, and report transparently on every outcome.',
  },
  {
    q: 'Does SA Media work with small businesses or only large brands?',
    a: 'Both. We work with bootstrapped founders and globally recognised names alike. Our approach scales to your stage and budget, from launch campaigns for new brands to full-funnel growth systems for established businesses expanding into new markets.',
  },
  {
    q: 'Where is SA Media based?',
    a: 'SA Media is headquartered in Toronto with active operations in New York and Dubai. We serve clients across North America, the Middle East, and Europe, operating across three continents and three time zones.',
  },
  {
    q: 'How quickly can SA Media start?',
    a: 'Typically within one to two weeks of onboarding. We have a fast intake process, a structured discovery sprint, and a team that is ready to move as soon as you are.',
  },
  {
    q: 'Does SA Media offer performance-based contracts?',
    a: 'We discuss performance structures on a case-by-case basis for clients with clear attribution models. Get in touch to discuss what structure works best for your brand.',
  },
]

export default function WhySAMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[55vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-lime">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">WHY SA MEDIA</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
            Numbers that<br />
            <span className="text-lime">speak for themselves.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed mt-8">
            We are a global media firm, not just a digital marketing agency. We combine strategy, design, development,
            and marketing under one roof and run them as one operating system. The result is faster execution,
            better creative, and outcomes that show up in your revenue.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-off-white px-6 py-10 md:py-16 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-dark/10">
            {stats.map((s) => (
              <div key={s.l} className="bg-off-white p-5 md:p-8">
                <p className="font-mono font-bold text-5xl text-lime leading-none mb-2">{s.v}</p>
                <p className="font-heading text-sm text-dark mb-1">{s.l}</p>
                <p className="font-body text-xs text-dark/40">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">THE DIFFERENCE</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-16">
            Six reasons brands{' '}
            <span className="text-lime">choose us.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {differentiators.map((d) => (
              <div key={d.n} className="bg-dark p-6 md:p-10">
                <p className="font-mono text-xs text-white/20 mb-4">{d.n}</p>
                <h3 className={`font-heading text-2xl mb-4 ${d.color}`}>{d.title}</h3>
                <p className="font-body text-base text-white/55 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/30 uppercase tracking-widest mb-3">WHAT WE DON&apos;T DO</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-12">
            Six things you will <span className="text-lime">never</span> hear from us.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dontDo.map((item, i) => (
              <div key={item.label} className="border border-dark/15 p-8 hover:border-lime/50 transition-colors duration-200">
                <span className="font-mono text-xs text-dark/20 mb-4 block">0{i + 1}</span>
                <div className="relative mb-3 inline-block">
                  <p className="font-heading text-xl text-dark/60">{item.label}</p>
                  <div className="absolute left-0 top-1/2 h-[2px] bg-lime w-full" />
                </div>
                <p className="font-body text-sm text-dark/45 leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">CLIENTS SAY</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
            Do not take our word for it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`relative border border-white/10 hover:border-teal/40 bg-white/[0.03] p-6 md:p-8 transition-all duration-300 border-t-2 ${i % 2 === 0 ? 'border-t-lime' : 'border-t-teal'}`}
              >
                <p className="font-heading text-lg text-white leading-snug mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-teal" />
                  <div>
                    <p className="font-mono text-xs text-teal">{t.name}</p>
                    <p className="font-body text-xs text-white/30">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">COMMON QUESTIONS</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-12">
            Questions about working with SA Media.
          </h2>
          <div className="border-t border-dark/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-dark/10 py-8">
                <h3 className="font-heading text-lg text-dark mb-3">{faq.q}</h3>
                <p className="font-body text-base text-dark/55 leading-relaxed max-w-2xl">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest">
              VIEW ALL FAQS →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl">
              Let&apos;s build the growth<br />
              <span className="text-lime">your brand deserves.</span>
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
            className="font-heading text-xl text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
