'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getRecentPosts } from '@/lib/blog-data'

export default function BlogTeaser() {
  const recent = getRecentPosts(3)

  return (
    <section className="bg-off-white px-6 py-24 border-t-[3px] border-lime">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">FROM THE BLOG</p>
            <h2 className="font-heading text-3xl md:text-5xl text-dark">
              Ideas worth <span className="text-teal">reading.</span>
            </h2>
          </motion.div>
          <Link
            href="/blog"
            className="font-mono text-xs text-dark/50 hover:text-lime transition-colors tracking-widest shrink-0"
          >
            ALL POSTS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="group flex flex-col gap-5 h-full border border-dark/15 hover:border-lime/60 bg-white hover:bg-white transition-all duration-300 p-8 relative overflow-hidden"
              >
                {/* Colored top accent strip alternating lime/teal */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${i % 2 === 0 ? 'bg-lime' : 'bg-teal'}`} />
                {/* Top meta */}
                <div className="flex items-center justify-between mt-1">
                  <p className={`font-mono text-xs uppercase tracking-widest ${i % 2 === 0 ? 'text-lime' : 'text-teal'}`}>{post.category}</p>
                  <p className="font-mono text-xs text-dark/30">{post.readTime}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-dark/10 group-hover:bg-lime/40 transition-colors duration-300" />

                {/* Title */}
                <h3 className="font-heading text-xl text-dark leading-snug group-hover:text-lime transition-colors duration-300 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-dark/55 leading-relaxed line-clamp-3">{post.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-dark/10">
                  <p className="font-mono text-xs text-dark/40">{post.location}</p>
                  <span className="font-mono text-xs text-dark/30 group-hover:text-lime transition-colors duration-300">
                    Read →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
