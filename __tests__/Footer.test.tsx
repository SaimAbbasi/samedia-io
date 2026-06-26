import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders READY TO GROW headline', () => {
    render(<Footer />)
    expect(screen.getByText(/READY TO GROW/i)).toBeInTheDocument()
  })

  it('renders Start a project CTA', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /start a project/i })).toHaveAttribute('href', '/contact-us')
  })

  it('renders 4 column headings', () => {
    render(<Footer />)
    expect(screen.getByText('AGENCY')).toBeInTheDocument()
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
    expect(screen.getByText('SERVICES')).toBeInTheDocument()
    expect(screen.getByText('EXPLORE')).toBeInTheDocument()
  })

  it('renders SA MEDIA logotype in bottom strip', () => {
    render(<Footer />)
    expect(screen.getByText(/SA MEDIA/i)).toBeInTheDocument()
  })

  it('renders location cities in bottom strip', () => {
    render(<Footer />)
    expect(screen.getByText(/TORONTO.*NEW YORK.*DUBAI/i)).toBeInTheDocument()
  })
})
