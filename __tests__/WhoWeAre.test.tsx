// __tests__/WhoWeAre.test.tsx
import { render, screen } from '@testing-library/react'
import WhoWeAre from '@/components/WhoWeAre'

describe('WhoWeAre', () => {
  it('renders section tagline', () => {
    render(<WhoWeAre />)
    expect(screen.getByText(/BY THE/i)).toBeInTheDocument()
    const creativesElements = screen.getAllByText(/CREATIVES/i)
    expect(creativesElements.length).toBeGreaterThan(0)
  })

  it('renders body paragraph', () => {
    render(<WhoWeAre />)
    expect(screen.getByText(/digital space for creators/i)).toBeInTheDocument()
  })

  it('renders location pills', () => {
    render(<WhoWeAre />)
    expect(screen.getByText(/Toronto/i)).toBeInTheDocument()
    expect(screen.getByText(/New York/i)).toBeInTheDocument()
    expect(screen.getByText(/Dubai/i)).toBeInTheDocument()
  })
})
