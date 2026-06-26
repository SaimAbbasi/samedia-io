'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const reasons = [
  {
    title: 'Measurable Results',
    description:
      'We leverage data analytics to craft winning digital media strategies that deliver real, trackable results for our clients.',
  },
  {
    title: 'Digital Growth Experts',
    description:
      'We sparked remarkable online engagement, driving significant traffic and brand awareness for social media channels and websites.',
  },
  {
    title: 'Lead Generation Specialists',
    description:
      'We deliver high-quality leads to businesses in real estate, healthcare, education, fitness, finance, and legal.',
  },
  {
    title: 'Stand Out From The Crowd',
    description:
      'We develop innovative brand growth strategies that transform our clients\' businesses, generate leads, and build a strong market presence.',
  },
  {
    title: 'Business Transformation Partners',
    description:
      'We offer personalized strategies to help our clients scale from small beginnings to successful businesses.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="04" label="Why Choose SA Media" />

        <div className="mt-12 mb-16">
          <h2 className="font-heading font-black uppercase leading-none text-5xl md:text-7xl text-white">
            WHY CHOOSE
          </h2>
          <h2 className="font-heading font-black uppercase leading-none text-5xl md:text-7xl text-lime">
            SA MEDIA
          </h2>
          <p className="font-body text-teal text-lg mt-4">
            Digital Growth Solution: Proven Record of Success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 border border-white/10 hover:border-lime/40 transition-colors"
            >
              <span className="font-heading text-lime text-xl mt-0.5 flex-shrink-0">→</span>
              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
