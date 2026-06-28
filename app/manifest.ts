import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SA Media',
    short_name: 'SA Media',
    description: 'A global media firm running strategy, design, development, and marketing as one operating system.',
    start_url: '/',
    display: 'standalone',
    background_color: '#26292E',
    theme_color: '#26292E',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/images/sa-media-logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/sa-media-logo.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
