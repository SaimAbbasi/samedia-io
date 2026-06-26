'use client'

export default function ContactPage() {
  return (
    <section className="bg-dark min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-heading text-lime text-xs uppercase tracking-widest mb-6">
          — Get In Touch
        </p>
        <h1 className="font-heading font-black uppercase text-white leading-none text-7xl md:text-9xl mb-16">
          LET&apos;S<br /><span className="text-lime">TALK</span>
        </h1>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-heading text-xs uppercase tracking-widest text-cream/60">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="bg-transparent border border-white/20 text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-heading text-xs uppercase tracking-widest text-cream/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="bg-transparent border border-white/20 text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="font-heading text-xs uppercase tracking-widest text-cream/60">
              Company
            </label>
            <input
              id="company"
              type="text"
              className="bg-transparent border border-white/20 text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors"
              placeholder="Your company"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-heading text-xs uppercase tracking-widest text-cream/60">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="bg-transparent border border-white/20 text-white font-body px-4 py-3 focus:outline-none focus:border-lime transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="font-heading text-sm uppercase tracking-wider px-10 py-4 bg-lime text-dark font-bold hover:bg-lime/90 transition-colors self-start"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-2">
          <p className="font-body text-cream/50 text-sm">
            Prefer email?{' '}
            <a href="mailto:hello@samedia.io" className="text-lime hover:underline">
              hello@samedia.io
            </a>
          </p>
          <p className="font-body text-cream/50 text-sm">
            Toronto · New York · Dubai
          </p>
        </div>
      </div>
    </section>
  )
}
