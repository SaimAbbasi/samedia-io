'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-28 h-28',
  lg: 'w-48 h-48',
  xl: 'w-96 h-96',
}

const fallbackColorMap: Record<string, string> = {
  'orb-lime': 'bg-lime',
  'orb-teal': 'bg-teal',
  'orb-cream': 'bg-cream',
  'orb-dark': 'bg-dark border border-white/20',
}

interface OrbProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
  className?: string
}

export default function Orb({
  src,
  alt,
  size = 'lg',
  animate = false,
  className = '',
}: OrbProps) {
  const [errored, setErrored] = useState(false)
  const sizeClass = sizeMap[size]
  const key = src.split('/').pop()?.replace('.png', '') ?? ''
  const fallback = fallbackColorMap[key] ?? 'bg-white/20'

  const inner = errored ? (
    <div className={`rounded-full ${sizeClass} ${fallback} ${className}`} />
  ) : (
    <div className={`relative ${sizeClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        onError={() => setErrored(true)}
      />
    </div>
  )

  if (animate && !errored) {
    return (
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative ${sizeClass} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          onError={() => setErrored(true)}
        />
      </motion.div>
    )
  }

  return inner
}
