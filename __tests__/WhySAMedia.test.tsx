import { render, screen } from '@testing-library/react'
import WhySAMedia from '@/components/WhySAMedia'

describe('WhySAMedia', () => {
  it('renders WHY SA MEDIA label', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('WHY SA MEDIA')).toBeInTheDocument()
  })

  it('renders — THE NUMBERS subsection', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('— THE NUMBERS')).toBeInTheDocument()
  })

  it('renders all 5 stat values', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('1B+')).toBeInTheDocument()
    expect(screen.getByText('50M+')).toBeInTheDocument()
    expect(screen.getByText('$1M+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
  })

  it('renders all 5 stat labels', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('Social Media Reach')).toBeInTheDocument()
    expect(screen.getByText('Likes Generated')).toBeInTheDocument()
    expect(screen.getByText('Sales Generated')).toBeInTheDocument()
    expect(screen.getByText('Creatives')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
  })

  it('renders — CLIENTS SAY subsection with 3 testimonials', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('— CLIENTS SAY')).toBeInTheDocument()
    expect(screen.getByText(/Roshan U\./i)).toBeInTheDocument()
    expect(screen.getByText(/Mike K\./i)).toBeInTheDocument()
    expect(screen.getByText(/Mohammad K\./i)).toBeInTheDocument()
  })

  it("renders — WHAT WE DON'T DO subsection", () => {
    render(<WhySAMedia />)
    expect(screen.getByText("— WHAT WE DON'T DO")).toBeInTheDocument()
    expect(screen.getByText('— Vanity metrics')).toBeInTheDocument()
    expect(screen.getByText('— Cookie-cutter content')).toBeInTheDocument()
  })

  it('renders — READY? CTA', () => {
    render(<WhySAMedia />)
    expect(screen.getByText('— READY?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start a project/i })).toHaveAttribute('href', '/contact-us')
  })
})
