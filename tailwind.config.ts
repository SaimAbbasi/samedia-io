import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#26292E',
        lime: '#EAF13A',
        teal: '#98C6BF',
        cream: '#E9E5CC',
        'deep-teal': '#009294',
        'soft-yellow': '#F5DF82',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.15em',
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
