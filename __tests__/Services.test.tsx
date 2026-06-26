import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services', () => {
  it('renders OUR SERVICES label', () => {
    render(<Services />)
    expect(screen.getByText('OUR SERVICES')).toBeInTheDocument()
  })

  it('renders intro paragraph', () => {
    render(<Services />)
    expect(screen.getByText(/one operating system/i)).toBeInTheDocument()
  })

  it('renders all 7 service numbers', () => {
    render(<Services />)
    ;['01', '02', '03', '04', '05', '06', '07'].forEach((n) => {
      expect(screen.getAllByText(n).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders all 7 service names', () => {
    render(<Services />)
    expect(screen.getByText('Social Media Management')).toBeInTheDocument()
    expect(screen.getByText('Content Creation')).toBeInTheDocument()
    expect(screen.getByText('Media Buying & Ads')).toBeInTheDocument()
    expect(screen.getByText('Influencer Marketing')).toBeInTheDocument()
    expect(screen.getByText('SEO & Content Strategy')).toBeInTheDocument()
    expect(screen.getByText('Email & CRM Automation')).toBeInTheDocument()
    expect(screen.getByText('Web Design & Development')).toBeInTheDocument()
  })
})
