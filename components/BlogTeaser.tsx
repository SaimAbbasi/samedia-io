import Link from 'next/link'
import { getRecentPosts } from '@/lib/blog-data'

export default function BlogTeaser() {
  const recent = getRecentPosts(3)

  return (
    <section className="bg-dark px-6 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">FROM THE BLOG</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white">
              Ideas worth reading.
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest shrink-0"
          >
            ALL POSTS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group md:px-8 first:md:pl-0 last:md:pr-0 py-8 md:py-0 flex flex-col gap-4"
            >
              <div>
                <p className="font-mono text-xs text-lime uppercase tracking-widest mb-1">{post.category}</p>
                <p className="font-mono text-xs text-white/30">{post.location} · {post.readTime}</p>
              </div>
              <h3 className="font-heading text-lg text-white leading-snug group-hover:text-lime transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-sm text-white/40 leading-relaxed line-clamp-3 mt-auto">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
