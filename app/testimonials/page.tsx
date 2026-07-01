import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials | SA Media',
  description: 'What founders, CEOs, and marketing leads say about working with SA Media — strategy, design, development, and growth results from real clients.',
  openGraph: {
    title: 'Client Testimonials | SA Media',
    description: 'What founders, CEOs, and marketing leads say about working with SA Media.',
    url: 'https://samedia.io/testimonials',
  },
}

const testimonials = [
  {
    quote: 'The website they built for us is the best thing we have done for the brand. Clean, fast, and built around our story.',
    attribution: 'Aarav Chugh',
    role: 'Founder, Aarav\'s Garage',
  },
  {
    quote: 'SA Media gave our brand a clear identity and a website to match. The content strategy alone changed how people talk about us.',
    attribution: 'James Li',
    role: 'Founder, James Li Realty',
  },
  {
    quote: 'From brand positioning to a full site build, they handled everything with zero hand-holding needed. The result speaks for itself.',
    attribution: 'Meaghan McNeill',
    role: 'Founder, Meaghan Living Properties',
  },
  {
    quote: 'I came in with a rough idea of who we were as a brand. SA Media turned that into a full identity, a content system, and a site that actually converts.',
    attribution: 'Joseph Argiro',
    role: 'Founder, Iron Key Capital',
  },
  {
    quote: 'SA Media understood our vision faster than any agency I have worked with. The brand development process was tight, and the content strategy has been running itself since day one.',
    attribution: 'Vullnet Nura',
    role: 'CEO, Vullnet Nura Group',
  },
  {
    quote: 'They transformed our social presence completely. Results we hadn\'t seen in years.',
    attribution: 'Roshan U.',
    role: 'COO, Pulse',
  },
  {
    quote: 'Strategic, data-driven, and actually fun to work with.',
    attribution: 'Mike K.',
    role: 'Founder, Pricimetrics',
  },
  {
    quote: 'Best investment we made for our brand\'s digital growth.',
    attribution: 'Mohammad K.',
    role: 'CEO, Mebame',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-28 md:pt-36 pb-16 md:pb-24 px-6 border-b-[3px] border-teal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-6">CLIENTS SAY</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-9xl leading-none text-white mb-6">
            WHAT THEY<br />
            <span className="text-lime">SAY.</span>
          </h1>
          <p className="font-body text-base text-white/50 max-w-lg leading-relaxed">
            Real words from founders, CEOs, and marketing leads who have worked with SA Media across brand, design, development, and growth.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-off-white px-6 py-20 md:py-28 border-t border-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
            {testimonials.map((t, i) => (
              <div
                key={t.attribution}
                className="group relative bg-off-white p-10 flex flex-col gap-6 overflow-hidden"
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${i % 2 === 0 ? 'bg-lime' : 'bg-teal'}`} />

                {/* Index */}
                <span className="font-mono text-xs text-dark/20">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Quote */}
                <p className="font-heading text-xl md:text-2xl text-dark leading-snug flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark/10">
                  <div className="w-5 h-px bg-dark/30 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-dark">{t.attribution}</p>
                    <p className="font-body text-xs text-dark/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-6 py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-teal uppercase tracking-widest mb-4">READY TO JOIN THEM?</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight">
              Let&apos;s build something<br />
              <span className="text-lime">worth talking about.</span>
            </h2>
          </div>
          <Link
            href="https://calendly.com/samedia-saim/sa-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity shrink-0"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
