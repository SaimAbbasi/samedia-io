import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Services from '@/components/Services'
import WhatsOnTheTable from '@/components/WhatsOnTheTable'
import Clients from '@/components/Clients'
import FounderQuote from '@/components/FounderQuote'
import WhySAMedia from '@/components/WhySAMedia'
import FAQ from '@/components/FAQ'
import BlogTeaser from '@/components/BlogTeaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <WhatsOnTheTable />
      <Clients />
      <FounderQuote />
      <WhySAMedia />
      <BlogTeaser />
      <FAQ />
    </>
  )
}
