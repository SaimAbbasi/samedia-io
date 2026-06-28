import ContactPageClient from './ContactPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact SA Media | Book a Discovery Call',
  description:
    'Get in touch with SA Media. Send us a message or book a free 30-minute discovery call. We work with brands across Toronto, New York, Dubai, Singapore, Monaco, and Miami.',
  openGraph: {
    title: 'Contact SA Media',
    description: 'Start a project with SA Media. Send a message or book a free discovery call. We respond within one business day.',
    url: 'https://samedia.io/contact-us',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
