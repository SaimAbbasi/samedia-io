import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost } from '@/lib/blog-data'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | SA Media Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SA Media Blog`,
      description: post.excerpt,
      url: `https://samedia.io/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      tags: [post.category, post.location],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SA Media Blog`,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const currentIndex = sorted.findIndex((p) => p.slug === post.slug)
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null
  const next = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-28 md:pt-36 pb-12 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/blog"
              className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest"
            >
              ← BLOG
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest">{post.location}</p>
            <span className="w-px h-3 bg-white/20" />
            <p className="font-mono text-xs text-lime uppercase tracking-widest">{post.category}</p>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs text-white/30">{post.date}</p>
            <p className="font-mono text-xs text-white/30">{post.readTime}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-off-white px-6 py-20 border-t border-dark">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-lg text-dark/60 leading-relaxed mb-12 border-l-2 border-lime pl-6">
            {post.excerpt}
          </p>
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-off-white px-6 py-12 border-t border-dark/20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group">
              <p className="font-mono text-xs text-dark/30 uppercase tracking-widest mb-2">Previous</p>
              <p className="font-heading text-lg text-dark group-hover:text-dark/60 transition-colors leading-snug">
                ← {prev.title}
              </p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group text-right ml-auto w-full">
              <p className="font-mono text-xs text-dark/30 uppercase tracking-widest mb-2">Next</p>
              <p className="font-heading text-lg text-dark group-hover:text-dark/60 transition-colors leading-snug">
                {next.title} →
              </p>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">WORK WITH US</p>
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight">
              Ready to put this<br />into practice?
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
