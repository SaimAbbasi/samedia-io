import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SA Media | Global Media Firm in Toronto, New York and Dubai',
  description:
    'SA Media is a global media firm running strategy, design, development, and marketing as one operating system for ambitious brands. 50+ brands. 1B+ reach. Toronto, New York, Dubai, Singapore, Monaco, Miami.',
  metadataBase: new URL('https://samedia.io'),
  openGraph: {
    title: 'SA Media | Global Media Firm',
    description: 'Strategy, design, development, and marketing as one operating system for ambitious brands.',
    url: 'https://samedia.io',
    siteName: 'SA Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SA Media | Global Media Firm',
    description: 'Strategy, design, development, and marketing as one operating system for ambitious brands.',
    site: '@samedia_saim',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SA Media',
  url: 'https://samedia.io',
  logo: 'https://samedia.io/images/sa-media-logo.png',
  email: 'info@samedia.io',
  foundingDate: '2020',
  description: 'SA Media is a global media firm running strategy, design, development, and marketing as one operating system for ambitious brands.',
  founder: { '@type': 'Person', name: 'Saim Abbasi' },
  areaServed: ['CA', 'US', 'AE', 'SG', 'MC', 'GB'],
  sameAs: [
    'https://www.instagram.com/samedia.io',
    'https://www.linkedin.com/company/sa-mediaio',
    'https://x.com/samedia_saim',
    'https://www.youtube.com/@SAMediaSaim',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-off-white text-dark font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
