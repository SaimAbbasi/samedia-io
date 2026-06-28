'use client'
import { useState } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/blog-data'

const locations = ['All', 'Toronto', 'Dubai', 'New York', 'Monaco', 'Miami', 'Singapore']

export default function BlogPageClient() {
  const [activeLocation, setActiveLocation] = useState('All')

  const filtered = (activeLocation === 'All'
    ? posts
    : posts.filter((p) => p.location === activeLocation)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] bg-dark px-6 pt-32 pb-20 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">INSIGHTS</p>
          <h1 className="font-heading text-6xl md:text-8xl leading-none text-white">
            <span className="block">Ideas.</span>
            <span className="block">Strategies.</span>
            <span className="block text-lime">Results.</span>
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-off-white border-t border-dark px-6 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
          <span className="font-mono text-xs text-dark/40 uppercase tracking-widest shrink-0">Filter:</span>
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 shrink-0 transition-colors border ${
                activeLocation === loc
                  ? 'bg-dark text-lime border-dark'
                  : 'text-dark/60 border-dark/20 hover:border-dark hover:text-dark'
              }`}
            >
              {loc}
            </button>
          ))}
          <span className="font-mono text-xs text-dark/30 ml-auto shrink-0">{filtered.length} posts</span>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-off-white px-6 py-12 border-t border-dark/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col divide-y divide-dark/10">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 hover:bg-dark/[0.02] -mx-4 px-4 transition-colors"
              >
                <div className="md:col-span-1">
                  <p className="font-mono text-xs text-dark/40 uppercase tracking-widest">{post.location}</p>
                  <p className="font-mono text-xs text-dark/30 mt-1">{post.date}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-mono text-xs text-lime uppercase tracking-widest mb-2">{post.category}</p>
                  <h2 className="font-heading text-xl md:text-2xl text-dark leading-tight group-hover:text-dark/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-dark/50 mt-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="md:col-span-1 flex md:justify-end items-start">
                  <div className="text-right">
                    <p className="font-mono text-xs text-dark/30">{post.readTime}</p>
                    <span className="font-mono text-sm text-lime group-hover:translate-x-1 transition-transform inline-block mt-2">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-6 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY TO GROW?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight">
              Let&apos;s put this<br />knowledge to work.
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting" target="_blank" rel="noopener noreferrer"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
