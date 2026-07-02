import TeamPageClient from './TeamPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | SA Media — Leadership Behind the Global Media Firm',
  description:
    "Meet the SA Media leadership team. Founded by Saim Abbasi — Queen's University Mechanical Engineering graduate, former Scotiabank Capital Markets analyst, serial entrepreneur behind three exits including a NASDAQ-listed company, and Managing Partner at Iron Key Capital. SA Media is built by strategists, creatives, engineers, and operators obsessed with brand growth and measurable results.",
  keywords: 'SA Media team, Saim Abbasi founder, SA Media leadership, marketing team Toronto, brand strategy team, fractional CMO team, enterprise marketing leadership',
  alternates: { canonical: 'https://samedia.io/team' },
  openGraph: {
    title: 'Meet the SA Media Team',
    description: "The people behind SA Media. Led by Saim Abbasi — engineer, former Scotiabank Capital Markets analyst, and serial entrepreneur behind three exits. Strategists, creatives, engineers, and operators building brands across Toronto, New York, Dubai, and beyond.",
    url: 'https://samedia.io/team',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Saim Abbasi',
  jobTitle: 'Founder & CEO',
  worksFor: { '@type': 'Organization', name: 'SA Media', url: 'https://samedia.io' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: "Queen's University" },
  description:
    "Saim Abbasi is the Founder and CEO of SA Media and Managing Partner at Iron Key Capital. A Queen's University Mechanical Engineering graduate and former Scotiabank Capital Markets analyst (XVA, Collateral & Credit Sales Trading), he has completed three company acquisitions in under two years including an exit to a NASDAQ-listed entity (Asset Entities, NASDAQ: $ASST). He has served as CMO for Squirrel Wallet and Progress Group Inc. and generated 250M+ content views and $10M+ across his media platforms.",
  sameAs: ['https://saimabbasi.com', 'https://x.com/samedia_saim'],
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <TeamPageClient />
    </>
  )
}
