// __tests__/Brands.test.tsx
import { render, screen } from '@testing-library/react'
import Brands from '@/components/Brands'

describe('Brands', () => {
  it('renders section heading', () => {
    render(<Brands />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/BRANDS WE'VE/)
    expect(heading).toHaveTextContent(/WORKED WITH/)
  })

  it('renders social media partners label', () => {
    render(<Brands />)
    expect(screen.getByText(/SOCIAL MEDIA PARTNERS/i)).toBeInTheDocument()
  })

  it('renders AI partners label', () => {
    render(<Brands />)
    expect(screen.getByText(/AI PARTNERS/i)).toBeInTheDocument()
  })

  it('renders brand name items', () => {
    render(<Brands />)
    expect(screen.getByText('YSL')).toBeInTheDocument()
    expect(screen.getByText('Netflix')).toBeInTheDocument()
  })
})
