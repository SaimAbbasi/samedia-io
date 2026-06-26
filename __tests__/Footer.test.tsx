import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/BY THE CREATIVES FOR THE CREATORS/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/SA Media©/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
  })
})
