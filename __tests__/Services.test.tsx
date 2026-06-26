// __tests__/Services.test.tsx
import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services', () => {
  it('renders all 7 services', () => {
    render(<Services />)
    expect(screen.getByText('Brand Development')).toBeInTheDocument()
    expect(screen.getByText('Social Media Management')).toBeInTheDocument()
    expect(screen.getByText('Web Development & SEO')).toBeInTheDocument()
    expect(screen.getByText('Digital Community Architects')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('Photography & Videography')).toBeInTheDocument()
    expect(screen.getByText('Graphic & 3D Design')).toBeInTheDocument()
  })

  it('renders numbered indices for each service', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('07')).toBeInTheDocument()
  })

  it('renders contact CTA link', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /CONTACT US/i })).toHaveAttribute('href', '/contact-us')
  })
})
