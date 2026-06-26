// __tests__/StatsStrip.test.tsx
import { render, screen } from '@testing-library/react'
import StatsStrip from '@/components/StatsStrip'

describe('StatsStrip', () => {
  it('renders all 5 stats', () => {
    render(<StatsStrip />)
    expect(screen.getByText('1B+')).toBeInTheDocument()
    expect(screen.getByText('50M+')).toBeInTheDocument()
    expect(screen.getByText('$1M+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsStrip />)
    expect(screen.getByText(/Social Media Reach/i)).toBeInTheDocument()
    expect(screen.getByText(/Sales Generated/i)).toBeInTheDocument()
  })
})
