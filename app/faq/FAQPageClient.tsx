'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const categories = [
  {
    name: 'Services',
    faqs: [
      {
        q: 'What services does SA Media offer?',
        a: 'SA Media offers brand strategy and positioning, brand identity and design, social media management, content creation, media buying and ads, influencer marketing, SEO and content strategy, email and CRM automation, web and e-commerce development, app development, analytics and attribution, AI development and automation, AI agent building, AIEO and GEO optimisation, and event planning and production.',
      },
      {
        q: 'Can SA Media handle both creative and technical work?',
        a: 'Yes. We operate as a full-service media firm, which means our team covers brand strategy, graphic design, motion, copywriting, web development, app development, paid media, SEO, and AI automation all under one roof. You work with one team, not five agencies.',
      },
      {
        q: 'Do you offer one-off projects or only retainers?',
        a: 'We offer both. Some clients engage us for a specific deliverable like a website build, a brand identity, or a launch campaign. Others retain us on an ongoing basis for social media management, paid media, and growth strategy. We scope each engagement based on your goals.',
      },
      {
        q: 'What is AIEO and why does it matter?',
        a: 'AIEO stands for AI Engine Optimisation. As consumers increasingly use tools like ChatGPT, Perplexity, and Gemini to find information and recommendations, brands need to ensure they are visible and well-represented in AI-generated answers. We optimise your content, structure, and brand signals so you appear when it matters.',
      },
      {
        q: 'What is GEO optimisation?',
        a: 'GEO stands for Generative Engine Optimisation. It is the practice of structuring your brand presence so that AI-powered search engines and generative tools recommend and reference your brand in response to relevant queries. It is the next frontier beyond traditional SEO.',
      },
    ],
  },
  {
    name: 'Process',
    faqs: [
      {
        q: 'How does SA Media measure campaign success?',
        a: 'We track measurable KPIs including reach, engagement rate, conversion rates, cost per acquisition, and revenue attribution. Everything is reported transparently so you always know what your investment is doing. We use GA4, GTM, and platform-native analytics to build a complete picture.',
      },
      {
        q: 'What does the onboarding process look like?',
        a: 'We start with a discovery session to understand your brand, audience, goals, and current performance. From there we build a 90-day strategy and present it for your review. Once aligned, we move into execution within one to two weeks. The process is structured, fast, and requires minimal time from you.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Paid campaigns typically show measurable results within 30 days. Organic growth through SEO and content compounds over three to six months. Brand identity and website projects have defined delivery timelines agreed upfront. We set honest expectations from the start and report progress throughout.',
      },
      {
        q: 'How often do we communicate during a project?',
        a: 'You will receive weekly performance updates, monthly strategy reviews, and access to a shared project workspace where everything is tracked. Your dedicated point of contact is reachable whenever you need them. We do not believe in radio silence.',
      },
      {
        q: 'Do I need to be heavily involved in the day-to-day?',
        a: 'No. We are built to run independently once we have understood your brand and goals. Most clients spend one to two hours per month reviewing results and providing approvals. The less you need to hand-hold us, the better we are doing our job.',
      },
    ],
  },
  {
    name: 'Clients & Fit',
    faqs: [
      {
        q: 'What industries do you specialise in?',
        a: 'We work across real estate, fintech, hospitality, fashion, luxury retail, e-commerce, legal, SaaS, healthcare, fitness, education, and professional services. Our playbook adapts to your industry, audience, and goals while maintaining the same high execution standard across all of them.',
      },
      {
        q: 'Do you work with businesses of all sizes?',
        a: 'Yes. We work with bootstrapped startups and established brands alike. Our approach scales to your stage, from launch campaigns to full-funnel growth systems across multiple markets. We have worked with first-time founders and seasoned CEOs of globally recognised businesses.',
      },
      {
        q: 'Do you work with clients outside of Toronto?',
        a: 'Absolutely. We have active operations in New York and Dubai and serve clients globally. Time zone differences are never a blocker. We use async communication, scheduled reviews, and shared workspaces to keep everything running smoothly regardless of location.',
      },
      {
        q: 'Can SA Media work with an existing in-house team?',
        a: 'Yes. We often operate alongside in-house marketing teams, acting as a specialist extension rather than a replacement. We define clear ownership of each function upfront so there is no duplication or confusion.',
      },
    ],
  },
  {
    name: 'Pricing',
    faqs: [
      {
        q: 'How is SA Media pricing structured?',
        a: 'Pricing depends on the scope, channels, and deliverables involved. We offer project-based pricing for defined deliverables and monthly retainers for ongoing work. We will never quote before understanding your goals. Reach out and we will put together a proposal that fits your budget and objectives.',
      },
      {
        q: 'Is there a minimum engagement size?',
        a: 'We work with clients at various investment levels. We can discuss what is realistic for your goals during an initial call. Our aim is always to deliver measurable ROI regardless of the budget scope.',
      },
      {
        q: 'Does SA Media offer performance-based contracts?',
        a: 'We discuss performance structures on a case-by-case basis for clients with clear attribution models and defined KPIs. Get in touch to discuss what structure makes sense for your engagement.',
      },
    ],
  },
  {
    name: 'AI & Technology',
    faqs: [
      {
        q: 'What AI tools does SA Media use?',
        a: 'We work with ChatGPT, Claude, Gemini, Midjourney, Runway, ElevenLabs, HeyGen, Stable Diffusion, Make, and Jasper among others. We integrate these tools into our production workflows to increase speed and quality while keeping a human creative layer over everything.',
      },
      {
        q: 'Can SA Media build AI agents for my business?',
        a: 'Yes. We build custom AI agents that handle customer service, lead qualification, content generation, internal operations, and more. If there is a repetitive workflow in your business, there is likely an AI agent that can automate it.',
      },
      {
        q: 'How does SA Media approach AI-powered content?',
        a: 'We use AI as a production accelerator, not a replacement for human creative thinking. Strategy, brand voice, and editorial judgment always come from our team. AI helps us move faster and scale output. The result is content that sounds and feels like your brand, not like a machine.',
      },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
}

export default function FAQPageClient() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[45vh] bg-dark px-6 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-end border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6 md:mb-8">FAQ</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl leading-none text-white mb-6">
            Frequently Asked{' '}
            <span className="text-teal">Questions.</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-xl leading-relaxed mt-6">
            Everything you want to know about working with SA Media, our services, process, and pricing.
            If your question is not here, reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      {categories.map((cat, ci) => (
        <section
          key={cat.name}
          className={`px-6 py-10 md:py-16 border-t-[3px] ${ci % 2 === 0 ? 'bg-off-white border-lime' : 'bg-dark border-teal'}`}
        >
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">
              {cat.name}
            </p>
            <div className={`border-t ${ci % 2 === 0 ? 'border-dark/10' : 'border-white/10'}`}>
              {cat.faqs.map((faq) => {
                const key = `${cat.name}:${faq.q}`
                const isOpen = openKey === key
                return (
                  <div
                    key={faq.q}
                    className={`border-b transition-all duration-200 ${isOpen ? 'border-l-2 border-l-lime pl-4' : ''} ${ci % 2 === 0 ? 'border-dark/10' : 'border-white/10'}`}
                  >
                    <button
                      className="w-full flex justify-between items-center py-6 text-left gap-4"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                    >
                      <span className={`font-heading text-lg transition-colors duration-200 ${isOpen ? 'text-lime' : ci % 2 === 0 ? 'text-dark' : 'text-white'}`}>
                        {faq.q}
                      </span>
                      <span className={`font-mono text-xl shrink-0 transition-colors duration-200 ${isOpen ? 'text-lime' : ci % 2 === 0 ? 'text-dark/40' : 'text-white/40'}`}>
                        {isOpen ? '×' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className={`font-body text-base pb-6 max-w-2xl leading-relaxed ${ci % 2 === 0 ? 'text-dark/60' : 'text-white/60'}`}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">STILL HAVE QUESTIONS?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight max-w-xl">
              We are happy to talk<br />
              <span className="text-lime">through the details.</span>
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-consulting-discovery-meeting" target="_blank" rel="noopener noreferrer"
            className="font-heading text-xl text-lime border border-lime px-8 py-4 hover:opacity-80 transition-opacity shrink-0"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}
