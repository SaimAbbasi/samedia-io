'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getRecentPosts } from '@/lib/blog-data'

export default function BlogTeaser() {
  const recent = getRecentPosts(3)

  return (
    <section className="bg-dark px-6 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">FROM THE BLOG</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white">
              Ideas worth reading.
            </h2>
          </motion.div>
          <Link
            href="/blog"
            className="font-mono text-xs text-teal hover:text-lime transition-colors tracking-widest shrink-0"
          >
            ALL POSTS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {recent.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group md:px-8 first:md:pl-0 last:md:pr-0 py-8 md:py-0 flex flex-col gap-4 h-full"
              >
                <div>
                  <p className="font-mono text-xs text-lime uppercase tracking-widest mb-1">{post.category}</p>
                  <p className="font-mono text-xs text-white/30">{post.location} · {post.readTime}</p>
                </div>
                <h3 className="font-heading text-lg text-white leading-snug group-hover:text-lime transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed line-clamp-3 mt-auto">{post.excerpt}</p>
                <span className="font-mono text-xs text-white/20 group-hover:text-lime transition-colors duration-300 mt-2">
                  Read →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
