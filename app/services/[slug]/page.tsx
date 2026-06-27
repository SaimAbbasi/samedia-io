import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getService } from '@/lib/services-data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: `${service.name} | SA Media`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">
            {service.eyebrow} · {service.n}
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white leading-none mb-8">
            {service.name}
          </h1>
          <p className="font-body text-xl text-white/50 max-w-2xl leading-relaxed">
            {service.description}
          </p>
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
              href="/contact-us"
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
