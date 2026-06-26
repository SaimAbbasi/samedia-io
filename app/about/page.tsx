import WhoWeAre from '@/components/WhoWeAre'
import StatsStrip from '@/components/StatsStrip'
import CTABanner from '@/components/CTABanner'
import SectionLabel from '@/components/SectionLabel'

const team = [
  { name: 'Saim Abbasi', role: 'CEO & Co-Founder' },
  { name: 'Anastasiia Krasnova', role: 'CMO & Co-Founder' },
  { name: 'Aly Mandviya', role: 'CFO & Co-Founder' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-heading text-lime text-xs uppercase tracking-widest mb-6">
            — Who We Are
          </p>
          <h1 className="font-heading font-black uppercase text-white leading-none text-7xl md:text-9xl">
            ABOUT<br /><span className="text-lime">SA MEDIA</span>
          </h1>
        </div>
      </section>

      <WhoWeAre />
      <StatsStrip />

      {/* Team */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="01" label="Our Team" />
          <h2 className="font-heading font-black uppercase text-white text-5xl md:text-7xl leading-none mt-4 mb-16">
            MEET OUR<br />TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 rounded-full bg-teal flex items-center justify-center">
                  <span className="font-heading font-black text-dark text-4xl">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-white text-lg uppercase tracking-wider">
                    {member.name}
                  </p>
                  <p className="font-body text-teal text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
