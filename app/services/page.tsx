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
      <CTABanner />
    </>
  )
}
