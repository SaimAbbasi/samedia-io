import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SA Media | Global Media Firm'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#26292E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        {/* Top: eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', background: '#98C6BF', borderRadius: '50%' }} />
          <span style={{ color: '#98C6BF', fontSize: '14px', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
            GLOBAL MEDIA FIRM
          </span>
        </div>

        {/* Middle: wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ color: '#FFFFFF', fontSize: '96px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>
            SA MEDIA
          </span>
          <span style={{ color: '#EAF13A', fontSize: '32px', fontWeight: 400 }}>
            Strategy. Design. Development. Marketing.
          </span>
        </div>

        {/* Bottom: cities */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', letterSpacing: '0.15em', fontFamily: 'monospace' }}>
            TORONTO · NEW YORK · DUBAI · SINGAPORE · MONACO · MIAMI
          </span>
          <span style={{ color: '#EAF13A', fontSize: '14px', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
            samedia.io
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
