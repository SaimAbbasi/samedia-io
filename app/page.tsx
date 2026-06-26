import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import StatsStrip from '@/components/StatsStrip'
import Services from '@/components/Services'
import WhatWeOffer from '@/components/WhatWeOffer'
import WhyChooseUs from '@/components/WhyChooseUs'
import Brands from '@/components/Brands'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <StatsStrip />
      <Services />
      <WhatWeOffer />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
