'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-28 h-28',
  lg: 'w-48 h-48',
  xl: 'w-96 h-96',
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
  const sizeClass = sizeMap[size]

  if (animate) {
    return (
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative ${sizeClass} ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </motion.div>
    )
  }

  return (
    <div className={`relative ${sizeClass} ${className}`}>
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  )
}
