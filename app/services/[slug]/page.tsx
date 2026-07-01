import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { services, getService } from '@/lib/services-data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) return {}
  const desc = service.description.slice(0, 160)
  const title = `${service.name} Services in Toronto, New York and Dubai | SA Media`
  return {
    title,
    description: desc,
    keywords: [service.name, 'SA Media', service.eyebrow, 'marketing agency Toronto', 'marketing agency Dubai', 'marketing agency New York', ...service.includes.slice(0, 5)].join(', '),
    openGraph: {
      title,
      description: desc,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
    },
    alternates: {
      canonical: `https://samedia.io/services/${params.slug}`,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'SA Media',
      url: 'https://samedia.io',
      areaServed: ['Toronto', 'New York', 'Dubai', 'Singapore', 'Monaco', 'Miami'],
    },
    serviceType: service.eyebrow,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="bg-dark pt-28 md:pt-36 pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">
            {service.eyebrow} · {service.n}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl text-white leading-none mb-8">
            {service.name}
          </h1>
          <p className="font-body text-xl text-white/50 max-w-2xl leading-relaxed">
            {service.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/samedia-saim/sa-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading text-base text-dark bg-lime px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Book a discovery call →
            </a>
            <Link
              href="/services"
              className="inline-block font-body text-sm text-white/50 border border-white/20 px-8 py-4 hover:border-white/50 hover:text-white transition-colors"
            >
              ← All services
            </Link>
          </div>
          {service.zunelabPartner && (
            <div className="mt-8 inline-flex items-center gap-3 border border-lime/30 px-5 py-3">
              <span className="font-mono text-xs text-lime tracking-widest">POWERED IN PARTNERSHIP WITH</span>
              <a
                href="https://zunelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm text-white hover:text-lime transition-colors"
              >
                ZUNE LAB →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="bg-off-white px-6 py-24 border-t border-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-6">
                WHAT&apos;S INCLUDED
              </p>
              <ul className="flex flex-col gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="font-body text-base text-dark/80 border-b border-dark/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-6">
                OUTCOMES
              </p>
              <div className="flex flex-col gap-8">
                {service.outcomes.map((o) => (
                  <div key={o.label}>
                    <p className="font-mono text-5xl font-bold text-dark leading-none mb-2">{o.stat}</p>
                    <p className="font-body text-sm text-dark/60">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      {service.philosophy && (
        <section className="bg-dark px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">
              HOW WE THINK ABOUT IT
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-10 max-w-3xl">
              {service.philosophy.title}
            </h2>
            <p className="font-body text-lg text-white/50 max-w-3xl leading-relaxed mb-20">
              {service.philosophy.body}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {service.philosophy.principles.map((p, i) => (
                <div key={i} className="bg-dark p-10 flex flex-col gap-4">
                  <p className="font-mono text-xs text-lime">0{i + 1}</p>
                  <h3 className="font-heading text-xl text-white leading-snug">{p.heading}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zune Lab partnership section */}
      {service.zunelabPartner && service.zunelabSystems && (
        <section className="bg-dark px-6 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Partnership header */}
            <div className="mb-16 pb-8 border-b border-white/10">
              <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">
                SA MEDIA × ZUNE LAB PARTNERSHIP
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-2xl">
                  AI infrastructure built by engineers.<br />
                  <span className="text-lime">Not marketing consultants.</span>
                </h2>
                <a
                  href="https://zunelab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest shrink-0"
                >
                  VISIT ZUNELAB.COM →
                </a>
              </div>
              <p className="font-body text-base text-white/50 max-w-2xl mt-6 leading-relaxed">
                Zune Lab is our sister AI systems company. Built by engineers from Aerospace, Finance, and Big Tech, they install working AI infrastructure inside operations - not chatbot gimmicks. When you engage SA Media for AI services, you get both teams.
              </p>
              {service.zunelabStats && (
                <div className="flex flex-wrap gap-12 mt-10">
                  {service.zunelabStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-mono text-4xl font-bold text-lime">{stat.value}</p>
                      <p className="font-body text-sm text-white/50 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Systems */}
            <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-10 text-white/30">
              THE SIX SYSTEMS WE BUILD
            </p>
            <div className="flex flex-col divide-y divide-white/10">
              {service.zunelabSystems.map((sys) => (
                <div key={sys.n} className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <span className="font-mono text-sm text-lime">{sys.n}</span>
                    <h3 className="font-heading text-xl text-white mt-2">{sys.name}</h3>
                    <p className="font-body text-sm text-white/50 mt-2">{sys.desc}</p>
                  </div>
                  <ul className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sys.items.map((item) => (
                      <li key={item} className="font-body text-sm text-white/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zune Lab stats-only for AI pages without full systems */}
      {service.zunelabPartner && !service.zunelabSystems && service.zunelabStats && (
        <section className="bg-dark px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">
              SA MEDIA × ZUNE LAB PARTNERSHIP
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-6">
              AI strategy meets<br /><span className="text-lime">AI engineering.</span>
            </h2>
            <p className="font-body text-base text-white/50 max-w-2xl leading-relaxed mb-10">
              Zune Lab is our sister AI systems company. When you work with SA Media on AI services, you benefit from both teams - SA Media&apos;s marketing and growth expertise, and Zune Lab&apos;s engineering depth.
            </p>
            <div className="flex flex-wrap gap-12 mb-8">
              {service.zunelabStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-4xl font-bold text-lime">{stat.value}</p>
                  <p className="font-body text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <a
              href="https://zunelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-teal hover:text-lime transition-colors"
            >
              Learn more about Zune Lab →
            </a>
          </div>
        </section>
      )}

      {/* Who it's for */}
      {service.whoFor && (
        <section className="bg-off-white px-6 py-20 border-t border-dark">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-6">
              WHO THIS IS FOR
            </p>
            <p className="font-body text-xl text-dark/80 max-w-3xl leading-relaxed">
              {service.whoFor}
            </p>
          </div>
        </section>
      )}

      {/* Our Process */}
      {service.process && (
        <section className="bg-dark px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">
              HOW WE WORK
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-16 max-w-2xl">
              Our process, step by step.
            </h2>
            <div className="flex flex-col divide-y divide-white/10">
              {service.process.map((step) => (
                <div key={step.n} className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-lime">{step.n}</span>
                    <h3 className="font-heading text-xl text-white">{step.title}</h3>
                  </div>
                  <p className="md:col-span-3 font-body text-base text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && (
        <>
          <Script
            id={`faq-schema-${service.slug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: service.faq.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.a,
                  },
                })),
              }),
            }}
          />
          <section className="bg-off-white px-6 py-24 border-t border-dark">
            <div className="max-w-7xl mx-auto">
              <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">
                FAQ
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-dark leading-tight mb-16 max-w-2xl">
                Common questions answered.
              </h2>
              <div className="flex flex-col divide-y divide-dark/10">
                {service.faq.map((item) => (
                  <details
                    key={item.q}
                    className="group py-8 cursor-pointer"
                  >
                    <summary className="list-none flex items-center justify-between gap-6">
                      <h3 className="font-heading text-xl md:text-2xl text-dark leading-snug">
                        {item.q}
                      </h3>
                      <span className="font-mono text-xl text-dark/30 shrink-0 group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <p className="font-body text-base text-dark/60 leading-relaxed mt-6 max-w-3xl">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="bg-off-white px-6 py-24 border-t border-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-4">READY?</p>
            <h2 className="font-heading text-4xl md:text-6xl text-dark leading-tight">
              Let&apos;s put {service.name}<br />to work for your brand.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
              className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
            >
              Start a project →
            </Link>
            <Link
              href="/services"
              className="font-body text-sm text-dark/50 hover:text-dark transition-colors"
            >
              ← All services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
