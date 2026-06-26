// __tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders headline words', () => {
    render(<Hero />)
    expect(screen.getByText('DIGITAL')).toBeInTheDocument()
    expect(screen.getByText('GROWTH')).toBeInTheDocument()
    expect(screen.getByText('SOLUTIONS')).toBeInTheDocument()
  })

  it('renders subheading copy', () => {
    render(<Hero />)
    expect(
      screen.getByText(/impactful digital media strategies/i)
    ).toBeInTheDocument()
  })

  it('renders CTA links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /OUR SERVICES/i })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: /FREE CONSULTATION/i })).toHaveAttribute('href', '/contact-us')
  })

  it('renders location line', () => {
    render(<Hero />)
    expect(screen.getByText(/TORONTO/i)).toBeInTheDocument()
    expect(screen.getByText(/NEW YORK/i)).toBeInTheDocument()
    expect(screen.getByText(/DUBAI/i)).toBeInTheDocument()
  })
})
