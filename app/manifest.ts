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
      // Replace with properly sized 192×192 and 512×512 PNGs for full PWA support.
      { src: '/images/sa-media-logo.png', sizes: 'any', type: 'image/png' },
    ],
  }
}
