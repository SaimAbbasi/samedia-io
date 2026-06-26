import Link from 'next/link'

const team = [
  { name: 'Saim Abbasi', role: 'Founder & CEO', initial: 'S' },
  { name: 'Creative Director', role: 'Brand & Design', initial: 'C' },
  { name: 'Growth Lead', role: 'Strategy & Media', initial: 'G' },
]

const stats = [
  { value: '1B+', label: 'Social Media Reach' },
  { value: '50M+', label: 'Likes Generated' },
  { value: '$1M+', label: 'Sales Generated' },
  { value: '100+', label: 'Creatives' },
  { value: '50+', label: 'Clients' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] bg-dark px-6 pt-32 pb-24 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">ABOUT SA MEDIA</p>
          <h1 className="font-heading text-6xl md:text-8xl leading-none text-white mb-0">
            <span className="block">BY THE CREATIVES</span>
            <span className="block">FOR THE CREATORS.</span>
          </h1>
        </div>
      </section>

      {/* Story + Team */}
      <section className="bg-off-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story */}
          <div>
            <p className="font-body text-lg text-dark/70 leading-relaxed mb-6">
              SA Media is a digital marketing agency built by creatives, for creators. We combine
              data-driven strategy with authentic storytelling to help brands grow across every
              digital channel.
            </p>
            <p className="font-body text-lg text-dark/70 leading-relaxed">
              Based in Toronto with reach across New York and Dubai, we&apos;ve helped brands from
              startups to global names achieve measurable results through social media, content,
              paid media, and growth strategy.
            </p>
          </div>

          {/* Team */}
          <div className="flex flex-col gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-6 pb-8 border-b border-dark/10 last:border-b-0 last:pb-0">
                <div className="w-16 h-16 bg-teal flex items-center justify-center shrink-0">
                  <span className="font-heading text-2xl text-dark">{member.initial}</span>
                </div>
                <div>
                  <p className="font-heading text-xl text-dark">{member.name}</p>
                  <p className="font-body text-sm text-dark/50">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-off-white px-6 py-16 border-t border-dark/20">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-10">THE NUMBERS</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono font-bold text-5xl text-dark leading-none mb-2">{s.value}</p>
                <p className="font-body text-sm text-dark/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white px-6 py-20 border-t border-dark/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-dark mb-6">
            Ready to work together?
          </h2>
          <Link
            href="/contact-us"
            className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  )
}
