import TeamPageClient from './TeamPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | SA Media Leadership and Creative Team',
  description:
    'Meet the SA Media team. Founded by Saim Abbasi, SA Media is built by strategists, creatives, engineers, and operators who are obsessed with brand growth and measurable results.',
  openGraph: {
    title: 'Meet the SA Media Team',
    description: 'The people behind SA Media. Strategists, creatives, engineers, and operators building brands across Toronto, New York, Dubai, and beyond.',
    url: 'https://samedia.io/team',
  },
}

export default function TeamPage() {
  return <TeamPageClient />
}
