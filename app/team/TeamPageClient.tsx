'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa6'

const team = [
  {
    name: 'Saim Abbasi',
    role: 'Founder & CEO',
    initial: 'SA',
    color: 'bg-lime',
    textColor: 'text-dark',
    bio: "Saim is a Queen's University Mechanical Engineering graduate and former XVA, Collateral and Credit Sales Trading Analyst at Scotiabank Capital Markets. He completed three acquisitions in under two years, including an exit to a NASDAQ-listed company (Asset Entities, $ASST), and is Managing Partner at Iron Key Capital. He has served as CMO at Progress Group Inc. and Squirrel Wallet, and his media platforms have generated 250M+ views. At SA Media, he leads strategy and is the direct senior contact for every engagement.",
    tags: ['Strategy', 'M&A', 'Venture Capital', 'Paid Media', 'AIEO / GEO', 'Fractional CMO'],
    linkedin: 'https://www.linkedin.com/in/saimabbasi/',
    website: 'https://saimabbasi.com/',
  },
  {
    name: 'Anastasiia Krasnova',
    role: 'Co-Founder & CMO',
    initial: 'AK',
    color: 'bg-teal',
    textColor: 'text-dark',
    bio: 'Anastasiia co-founded SA Media and leads our creative and marketing strategy. She drives the visual identity, brand systems, and campaign direction that define how our clients show up in the world - combining an eye for aesthetics with a sharp understanding of what actually converts.',
    tags: ['Brand Identity', 'Creative Strategy', 'CMO'],
    linkedin: 'https://www.linkedin.com/company/sa-mediaio/',
  },
  {
    name: 'Aly Mandviya',
    role: 'Co-Founder & CFO',
    initial: 'AM',
    color: 'bg-dark',
    textColor: 'text-lime',
    bio: 'Aly co-founded SA Media and oversees the financial strategy and operational infrastructure that lets the agency move fast and stay lean. His background in finance and business development means clients get an agency that is as rigorous about ROI as it is about creative quality.',
    tags: ['Finance', 'Operations', 'Growth'],
    linkedin: 'https://www.linkedin.com/company/sa-mediaio/',
  },
  {
    name: 'Content Strategist',
    role: 'Social & Content',
    initial: 'CS',
    color: 'bg-off-white',
    textColor: 'text-dark',
    bio: 'Our Content Strategist builds the editorial and social media frameworks that keep brands showing up consistently and effectively. They understand platform algorithms, audience psychology, and what it actually takes to make content that converts.',
    tags: ['Social Media', 'Content', 'UGC'],
    linkedin: '#',
  },
  {
    name: 'AI & Automation Lead',
    role: 'AI Systems & Engineering',
    initial: 'AI',
    color: 'bg-lime',
    textColor: 'text-dark',
    bio: 'Working in close partnership with our sister company Zune Lab, our AI Lead builds the automation infrastructure, AI workflows, and intelligent systems that free our clients to focus on what matters. From AIEO to custom agents, they are the technical engine behind our AI services.',
    tags: ['AI', 'Automation', 'AIEO / GEO'],
    linkedin: '#',
  },
  {
    name: 'Events Producer',
    role: 'Events & Brand Activations',
    initial: 'EP',
    color: 'bg-teal',
    textColor: 'text-dark',
    bio: 'Our Events Producer has delivered brand activations, corporate conferences, and product launches across Toronto, Dubai, and New York. They bring the same obsessive attention to detail in-person that the rest of the team brings to digital - with the logistics skills to keep everything running smoothly under pressure.',
    tags: ['Events', 'Brand Activations', 'Production'],
    linkedin: '#',
  },
]

const values = [
  { n: '01', name: 'Results first', desc: 'We measure everything that matters. If we can\'t show you how our work connects to revenue, we don\'t do it.' },
  { n: '02', name: 'No black boxes', desc: 'Full transparency on strategy, spend, performance, and process. You always know exactly what\'s happening and why.' },
  { n: '03', name: 'One team', desc: 'Strategy, creative, media, and tech work together in one room. No silos, no hand-offs, no information lost in translation.' },
  { n: '04', name: 'Built to last', desc: 'We build systems and brand equity that compound over time, not campaigns that spike once and disappear.' },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-dark px-6 pt-28 md:pt-36 pb-12 md:pb-20 flex flex-col justify-end overflow-hidden">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(152,198,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(152,198,191,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Orb */}
        <motion.div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(234,241,58,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.p
            className="font-mono text-xs text-teal uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SA MEDIA
          </motion.p>
          <h1 className="font-heading leading-none text-white mb-8">
            {['THE PEOPLE', 'BEHIND THE'].map((line, i) => (
              <motion.span
                key={line}
                className="block text-4xl sm:text-5xl md:text-8xl"
                initial={{ opacity: 0, y: 60, skewY: 2 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="block text-4xl sm:text-5xl md:text-8xl text-lime"
              initial={{ opacity: 0, y: 60, skewY: 2 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              RESULTS.
            </motion.span>
          </h1>
          <motion.p
            className="font-body text-lg text-white/50 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            A small, focused team of strategists, creatives, engineers, and operators.
            We don&apos;t hire for headcount. We hire for impact.
          </motion.p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-dark px-6 py-14 md:py-20 border-t-[3px] border-lime">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-teal uppercase tracking-widest mb-8">LEADERSHIP</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
            <div className="col-span-1 lg:col-span-2 bg-dark p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-lime flex items-center justify-center shrink-0">
                  <span className="font-heading text-2xl font-bold text-dark">SA</span>
                </div>
                <div className="pt-1">
                  <h2 className="font-heading text-3xl text-white mb-1">Saim Abbasi</h2>
                  <p className="font-mono text-xs text-teal uppercase tracking-widest">Founder · President & CEO</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-body text-base text-white/55 leading-relaxed mb-8">
                <p>
                  Saim is a Mechanical Engineering graduate from Queen&apos;s University and a former XVA, Collateral and Credit Sales Trading Analyst at Scotiabank Capital Markets. He applies the same quantitative, systems-level discipline from institutional finance to every strategy SA Media builds, making the firm structurally different from agencies built by creatives alone.
                </p>
                <p>
                  Before founding SA Media, Saim completed three company acquisitions in under two years, culminating in an exit to Asset Entities (NASDAQ: <span className="font-mono text-lime text-sm">$ASST</span>) and a subsequent transaction with Strive Asset Management. He is currently Managing Partner at Iron Key Capital, one of the youngest individuals to hold that title globally.
                </p>
                <p>
                  Saim has served as Chief Technology Officer and Head of AI as well as CMO for Progress Group Inc., and CMO for Squirrel Wallet, Director of Strategy and Operations at Vosyn AI, and sits on the Board of Advisors at CMPUS. His content platforms have accumulated 250M+ views and the SA ecosystem has generated over $10M in collective economic value across 1,000+ founders and students mentored.
                </p>
              </div>
            </div>
            <div className="bg-dark p-8 md:p-12 flex flex-col gap-6 border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10">
              <p className="font-mono text-xs text-teal uppercase tracking-widest">TRACK RECORD</p>
              {[
                { metric: '3', label: 'Successful business exits' },
                { metric: '250M+', label: 'Content views across platforms' },
                { metric: '$10M+', label: 'Revenue generated via SA ecosystem' },
                { metric: '10+', label: 'Active ventures across VC, Media & AI' },
                { metric: '1,000+', label: 'Founders and students mentored' },
              ].map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <p className="font-mono font-bold text-3xl text-lime leading-none mb-1">{item.metric}</p>
                  <p className="font-body text-sm text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-off-white px-6 py-14 md:py-24 border-t border-dark">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE TEAM
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group relative bg-off-white p-6 md:p-10 flex flex-col gap-6 overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ backgroundColor: '#26292E', transition: { duration: 0.3 } }}
              >
                {/* Animated lime bar top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-lime"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (i % 3) * 0.1 }}
                />

                {/* Avatar */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 ${member.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`font-heading text-lg font-bold ${member.textColor}`}>
                      {member.initial}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-dark/20 group-hover:text-white/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info */}
                <div>
                  {(member as { website?: string }).website ? (
                    <a
                      href={(member as { website?: string }).website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-2xl text-dark group-hover:text-white hover:text-lime transition-colors duration-300 mb-1 block"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <p className="font-heading text-2xl text-dark group-hover:text-white transition-colors duration-300 mb-1">
                      {member.name}
                    </p>
                  )}
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-xs text-teal uppercase tracking-widest">
                      {member.role}
                    </p>
                    {member.linkedin !== '#' && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-dark/30 group-hover:text-white/40 hover:text-lime transition-colors duration-200"
                      >
                        <FaLinkedinIn size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <p className="font-body text-sm text-dark/60 group-hover:text-white/50 transition-colors duration-300 leading-relaxed">
                  {member.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-dark/40 group-hover:text-white/30 border border-dark/10 group-hover:border-white/10 px-2 py-1 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark px-6 py-14 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            HOW WE OPERATE
          </motion.p>
          <motion.h2
            className="font-heading text-3xl md:text-6xl text-white leading-tight mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            The principles we<br />
            <span className="text-lime">won&apos;t compromise on.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                className="group relative bg-dark p-6 md:p-10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)', transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-lime"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ originX: 0, width: '100%' }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                />
                <p className="font-mono text-xs text-lime mb-4">{v.n}</p>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-4 group-hover:text-lime transition-colors duration-300">
                  {v.name}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed max-w-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="bg-dark px-6 py-12 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              className="font-mono text-xs text-teal uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              WANT IN?
            </motion.p>
            <motion.h2
              className="font-heading text-4xl md:text-5xl text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Think you belong<br />on this team?
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="https://calendly.com/samedia-saim/sa-discovery-meeting" target="_blank" rel="noopener noreferrer"
              className="font-heading text-xl text-lime hover:opacity-80 transition-opacity"
            >
              Get in touch →
            </Link>
            <Link
              href="/services"
              className="font-body text-sm text-white/40 hover:text-white transition-colors"
            >
              See what we build
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
