import Services from '@/components/Services'
import WhatWeOffer from '@/components/WhatWeOffer'
import CTABanner from '@/components/CTABanner'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-heading text-lime text-xs uppercase tracking-widest mb-6">
            — What We Do
          </p>
          <h1 className="font-heading font-black uppercase text-white leading-none text-7xl md:text-9xl">
            OUR<br /><span className="text-lime">SERVICES</span>
          </h1>
        </div>
      </section>

      <WhatWeOffer />
      <Services />

      {/* Pricing */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading text-lime text-xs uppercase tracking-widest mb-6">
            — Pricing
          </p>
          <h2 className="font-heading font-black uppercase text-white leading-none text-5xl md:text-7xl mb-8">
            FLEXIBLE<br />PRICING
          </h2>
          <p className="font-body text-cream/80 text-lg leading-relaxed">
            Our services are priced based on your business goals and scope of work. We offer flexible pricing options, including monthly retainers, project-based fees, and performance-based pricing. We work with each client to create a customized proposal that meets their budget and objectives.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
