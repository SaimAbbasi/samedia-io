import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients & Partners | SA Media Brands We Grow',
  description:
    'SA Media works with brands across real estate, fintech, hospitality, fashion, and more in Toronto, New York, and Dubai. See the platform ecosystem and industries we serve.',
  openGraph: {
    title: 'Clients & Partners | SA Media',
    description:
      'From bootstrapped startups to global names. SA Media has helped 50+ brands grow across three continents.',
    url: 'https://samedia.io/clients',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SA Media',
  url: 'https://samedia.io',
  description: 'SA Media is a global media firm that has worked with 50+ brands across Toronto, New York, and Dubai.',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '20+' },
  areaServed: ['Canada', 'United States', 'United Arab Emirates'],
  knowsAbout: [
    'Social Media Marketing',
    'Brand Strategy',
    'Content Production',
    'Digital Advertising',
    'AI Marketing Automation',
    'Influencer Marketing',
    'Search Engine Optimisation',
  ],
}

const testimonials = [
  {
    quote: 'SA Media\'s SEO and paid media work generated hundreds of qualified leads for us. They understood our market immediately and built a program that delivered real, measurable results. I would recommend them to any company serious about growth.',
    name: 'Chris Hopper',
    role: 'VP, Growth & Finance · Waste Reduction Group',
    service: 'SEO & Paid Media',
  },
  {
    quote: 'The website they built for us is the best thing we have done for the brand. Clean, fast, and built around our story.',
    name: 'Aarav Chugh',
    role: 'Founder, Aarav\'s Garage',
    service: 'Brand Development, Website Build',
  },
  {
    quote: 'SA Media gave our brand a clear identity and a website to match. The content strategy alone changed how people talk about us.',
    name: 'James Li',
    role: 'Founder, James Li Realty',
    service: 'Brand Identity, Content Strategy, Website Build',
  },
  {
    quote: 'From brand positioning to a full site build, they handled everything with zero hand-holding needed. The result speaks for itself.',
    name: 'Meaghan McNeill',
    role: 'Founder, Meaghan Living Properties',
    service: 'Brand Positioning, Website Build',
  },
  {
    quote: 'I came in with a rough idea of who we were as a brand. SA Media turned that into a full identity, a content system, and a site that actually converts.',
    name: 'Joseph Argiro',
    role: 'Founder, Iron Key Capital',
    service: 'Brand Identity, Content Strategy, Website Build',
  },
  {
    quote: 'SA Media understood our vision faster than any agency I have worked with. The brand development process was tight, and the content strategy has been running itself since day one.',
    name: 'Vullnet Nura',
    role: 'CEO, Vullnet Nura Group',
    service: 'Brand Development, Content Strategy',
  },
  {
    quote: 'They transformed our social presence completely. Results we had not seen in years.',
    name: 'Roshan U.',
    role: 'COO, Pulse',
    service: 'Social Media Management',
  },
  {
    quote: 'Strategic, data-driven, and actually fun to work with.',
    name: 'Mike K.',
    role: 'Founder, Pricimetrics',
    service: 'Digital Growth Strategy',
  },
  {
    quote: 'Best investment we made for our brand\'s digital growth.',
    name: 'Mohammad K.',
    role: 'CEO, Mebame',
    service: 'Social Media & Content',
  },
]

const industries = [
  { name: 'Real Estate', detail: 'Residential and commercial agents, brokerages, and property developers' },
  { name: 'Fintech', detail: 'Investment platforms, wealth management firms, and financial services' },
  { name: 'Hospitality', detail: 'Hotels, restaurants, event venues, and travel brands' },
  { name: 'Fashion & Luxury', detail: 'Fashion labels, luxury goods, and premium lifestyle brands' },
  { name: 'E-commerce', detail: 'DTC brands, Shopify stores, and online retailers' },
  { name: 'Legal & Professional Services', detail: 'Law firms, consultancies, and B2B professional service providers' },
  { name: 'SaaS & Technology', detail: 'Software companies, tech startups, and platform businesses' },
  { name: 'Healthcare & Wellness', detail: 'Clinics, wellness brands, supplements, and health platforms' },
  { name: 'Fitness & Sports', detail: 'Gyms, personal trainers, sports brands, and athletic apparel' },
  { name: 'Education', detail: 'EdTech platforms, coaching businesses, and training providers' },
  { name: 'Food & Beverage', detail: 'Restaurant groups, CPG brands, and specialty food producers' },
  { name: 'Automotive', detail: 'Dealerships, garage businesses, and automotive aftermarket brands' },
]

const platforms = {
  social: ['Meta', 'Google', 'TikTok', 'YouTube', 'Instagram', 'LinkedIn', 'X / Twitter', 'Snapchat', 'Pinterest', 'Reddit', 'Shopify', 'WhatsApp Business'],
  ai: ['ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'Perplexity', 'Runway', 'ElevenLabs', 'Sora', 'HeyGen', 'Stable Diffusion', 'Make', 'Jasper'],
}

const stats = [
  { v: '1B+', l: 'Social Media Reach', sub: 'Across all managed channels' },
  { v: '50M+', l: 'Likes Generated', sub: 'Organic and paid combined' },
  { v: '$1M+', l: 'Sales Generated', sub: 'Direct attribution' },
  { v: '100+', l: 'Creatives Per Month', sub: 'Produced in-house' },
  { v: '50+', l: 'Clients', sub: 'Across 3 continents' },
]

export default function ClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[55vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">OUR CLIENTS</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
            <span className="block">Brands that ship.</span>
            <span className="block text-lime">We help them grow.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed mt-8">
            SA Media has worked with 50+ clients across real estate, fintech, hospitality, fashion, and beyond.
            From bootstrapped founders building their first brand to established names scaling across continents.
            Different industries. The same relentless playbook.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-off-white px-6 py-10 md:py-16 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-dark/10">
            {stats.map((s) => (
              <div key={s.l} className="bg-off-white p-5 md:p-8">
                <p className="font-mono font-bold text-5xl text-dark leading-none mb-2">{s.v}</p>
                <p className="font-heading text-sm text-dark mb-1">{s.l}</p>
                <p className="font-body text-xs text-dark/40">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark px-6 py-14 md:py-24 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">WHAT CLIENTS SAY</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-16">
            Words from the{' '}
            <span className="text-lime">brands we have built.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`relative border border-white/10 hover:border-teal/40 bg-white/[0.03] hover:bg-teal/[0.05] p-6 md:p-8 transition-all duration-300 border-t-2 ${i % 2 === 0 ? 'border-t-lime' : 'border-t-teal'}`}
              >
                <span className="absolute top-4 right-6 font-heading text-7xl text-white/5 leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-heading text-lg text-white leading-snug mb-6 relative">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-teal" />
                  <div>
                    <p className="font-mono text-xs text-teal">{t.name}</p>
                    <p className="font-body text-xs text-white/30">{t.role}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-lime/40 mt-4">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">INDUSTRIES</p>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-12">
            We speak your{' '}
            <span className="text-lime">industry&apos;s language.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-off-white p-6 border-l-2 border-lime">
                <p className="font-heading text-lg text-dark mb-1">{ind.name}</p>
                <p className="font-body text-sm text-dark/50 leading-relaxed">{ind.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform ecosystem */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">PLATFORM ECOSYSTEM</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-12">
            We operate where{' '}
            <span className="text-teal">your audience lives.</span>
          </h2>

          <div className="mb-10">
            <p className="font-mono text-xs text-lime uppercase tracking-widest mb-5">Social &amp; Distribution</p>
            <div className="flex flex-wrap gap-3">
              {platforms.social.map((p) => (
                <span
                  key={p}
                  className="font-heading text-base text-white/50 border border-white/10 hover:border-lime/60 hover:text-white px-5 py-3 transition-colors duration-200 cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-5">AI &amp; Automation</p>
            <div className="flex flex-wrap gap-3">
              {platforms.ai.map((p) => (
                <span
                  key={p}
                  className="font-heading text-base text-white/50 border border-white/10 hover:border-teal/60 hover:text-white px-5 py-3 transition-colors duration-200 cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">JOIN THEM</p>
            <h2 className="font-heading text-4xl md:text-5xl text-dark leading-tight max-w-xl">
              Ready to be the brand<br />
              <span className="text-lime">everyone is talking about?</span>
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
