import type { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog | SA Media Insights on Marketing, AI, and Brand Growth',
  description:
    'Ideas, strategies, and results from SA Media. Insights on digital marketing, AI automation, brand strategy, SEO, AIEO, and growth for businesses across Toronto, Dubai, New York, Monaco, Miami, and Singapore.',
  openGraph: {
    title: 'SA Media Blog | Marketing, AI, and Brand Growth Insights',
    description: 'Read the latest from SA Media on digital marketing, AI, brand strategy, and growth across global markets.',
    url: 'https://samedia.io/blog',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
