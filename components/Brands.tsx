'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const brands = [
  'YSL', 'Givenchy', 'Chanel', 'Converse', 'Versace', 'Adidas', 'SKIMS', 'Moose Knuckles',
  'Airbnb', 'BMW', 'RBC', 'Chotto Matte', 'FAT', 'McMaster', 'Lamborghini', 'Emirates',
  'Xbox', 'Apple', 'Coca-Cola', 'Nespresso', 'Sony', 'Netflix', 'Canon', 'Omega',
]

const socialPartners = ['Meta Business Partner', 'Google Partner', 'TikTok Marketing Partner', 'Shopify Partners']
const aiPartners = ['ChatGPT', 'Grammarly', 'MAX AI', 'Tome', 'Midjourney']

export default function Brands() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="05" label="Brands We've Worked With" light />
        <h2 className="font-heading font-black uppercase text-dark text-5xl md:text-7xl leading-none mt-4 mb-16">
          BRANDS WE&apos;VE<br />WORKED WITH
        </h2>

        {/* Logo grid — text placeholders until real logos are supplied */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-16">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="aspect-square flex items-center justify-center bg-dark/5 grayscale hover:grayscale-0 hover:bg-dark/10 transition-all cursor-default"
            >
              <span className="font-heading font-bold text-dark text-xs text-center px-2 leading-tight">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partner rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-dark/20 pt-12">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-dark/50 mb-4">
              Social Media Partners
            </p>
            <div className="flex flex-wrap gap-3">
              {socialPartners.map((p) => (
                <span key={p} className="font-body text-sm text-dark/70 bg-dark/10 px-3 py-1.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-dark/50 mb-4">
              AI Partners
            </p>
            <div className="flex flex-wrap gap-3">
              {aiPartners.map((p) => (
                <span key={p} className="font-body text-sm text-dark/70 bg-dark/10 px-3 py-1.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
