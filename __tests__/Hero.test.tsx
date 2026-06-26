import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders eyebrow label', () => {
    render(<Hero />)
    expect(screen.getByText(/DIGITAL MARKETING AGENCY/i)).toBeInTheDocument()
  })

  it('renders stacked headline words', () => {
    render(<Hero />)
    expect(screen.getByText('DIGITAL')).toBeInTheDocument()
    expect(screen.getByText('GROWTH')).toBeInTheDocument()
    expect(screen.getByText('SOLUTIONS.')).toBeInTheDocument()
  })

  it('renders subhead copy', () => {
    render(<Hero />)
    expect(screen.getByText(/impactful digital strategies/i)).toBeInTheDocument()
  })

  it('renders Our services CTA linking to /services', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /our services/i })).toHaveAttribute('href', '/services')
  })

  it('renders Free consultation CTA linking to /contact-us', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /free consultation/i })).toHaveAttribute('href', '/contact-us')
  })

  it('renders location line', () => {
    render(<Hero />)
    expect(screen.getByText(/TORONTO/i)).toBeInTheDocument()
    expect(screen.getByText(/NEW YORK/i)).toBeInTheDocument()
    expect(screen.getByText(/DUBAI/i)).toBeInTheDocument()
  })
})
