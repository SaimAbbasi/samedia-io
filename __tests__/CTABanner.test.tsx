import { render, screen } from '@testing-library/react'
import CTABanner from '@/components/CTABanner'

describe('CTABanner', () => {
  it('renders CONNECT WITH US heading', () => {
    render(<CTABanner />)
    expect(screen.getByRole('heading', { level: 2, name: /CONNECT/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /WITH US/i })).toBeInTheDocument()
  })

  it('renders body copy', () => {
    render(<CTABanner />)
    expect(screen.getByText(/schedule a free initial consultation/i)).toBeInTheDocument()
  })

  it('renders GET STARTED link to contact page', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: /GET STARTED/i })).toHaveAttribute('href', '/contact-us')
  })
})
