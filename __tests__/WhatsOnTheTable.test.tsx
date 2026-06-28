import { render, screen } from '@testing-library/react'
import WhatsOnTheTable from '@/components/WhatsOnTheTable'

describe('WhatsOnTheTable', () => {
  it("renders WHAT'S ON THE TABLE heading", () => {
    render(<WhatsOnTheTable />)
    expect(screen.getByText(/WHAT'S ON THE TABLE/i)).toBeInTheDocument()
  })

  it('renders subhead', () => {
    render(<WhatsOnTheTable />)
    expect(screen.getByText(/under one roof/i)).toBeInTheDocument()
  })

  it('renders 4 column numbers', () => {
    render(<WhatsOnTheTable />)
    ;['01', '02', '03', '04'].forEach((n) => {
      expect(screen.getAllByText(n).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders 4 column headings', () => {
    render(<WhatsOnTheTable />)
    expect(screen.getByText('Strategy')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Media')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
  })

  it('renders bullet items with em-dash prefix', () => {
    render(<WhatsOnTheTable />)
    expect(screen.getByText(' -  Digital Marketing Plan')).toBeInTheDocument()
    expect(screen.getByText(' -  Google Ads')).toBeInTheDocument()
    expect(screen.getByText(' -  SEO & Link Building')).toBeInTheDocument()
  })
})
