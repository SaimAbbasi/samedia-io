import type { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { posts } from '@/lib/blog-data'
import { fractionalServices } from '@/lib/fractional-data'

const BASE_URL = 'https://samedia.io'

// Update this date when deploying meaningful content changes to static pages.
// Using a fixed date (not new Date()) prevents every build from falsely signalling
// that every page changed, which wastes search-engine crawl budget.
const SITE_UPDATED = new Date('2025-06-01')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/team`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/what-we-do`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/capabilities`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/clients`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/why-sa-media`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fractional`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: SITE_UPDATED, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/testimonials`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact-us`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const fractionalPages: MetadataRoute.Sitemap = fractionalServices.map((s) => ({
    url: `${BASE_URL}/fractional/${s.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date), // uses each post's actual publish date
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...fractionalPages, ...blogPages]
}
