import { render, screen } from '@testing-library/react'
import Clients from '@/components/Clients'

describe('Clients', () => {
  it('renders OUR CLIENTS label', () => {
    render(<Clients />)
    expect(screen.getByText('OUR CLIENTS')).toBeInTheDocument()
  })

  it('renders headline copy', () => {
    render(<Clients />)
    expect(screen.getByText(/brands that ship/i)).toBeInTheDocument()
  })

  it('renders partner section labels', () => {
    render(<Clients />)
    expect(screen.getByText('— SOCIAL MEDIA PARTNERS')).toBeInTheDocument()
    expect(screen.getByText('— AI PARTNERS')).toBeInTheDocument()
  })

  it('renders social media partner names', () => {
    render(<Clients />)
    expect(screen.getByText('Meta')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('TikTok')).toBeInTheDocument()
    expect(screen.getByText('Shopify')).toBeInTheDocument()
  })

  it('renders AI partner names', () => {
    render(<Clients />)
    expect(screen.getByText('ChatGPT')).toBeInTheDocument()
    expect(screen.getByText('Midjourney')).toBeInTheDocument()
  })
})
