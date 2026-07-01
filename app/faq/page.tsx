import FAQPageClient from './FAQPageClient'
import type { Metadata } from 'next'
import { faqJsonLd } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'FAQ | SA Media Frequently Asked Questions',
  description:
    "Find answers to common questions about SA Media's services, process, pricing, and approach to digital marketing, AI automation, and brand growth.",
  openGraph: {
    title: 'FAQ | SA Media',
    description: 'Everything you need to know about working with SA Media services, process, pricing, AI tools, and more.',
    url: 'https://samedia.io/faq',
  },
}

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD rendered server-side so crawlers see it in the initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPageClient />
    </>
  )
}
