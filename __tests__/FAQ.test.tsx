import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '@/components/FAQ'

describe('FAQ', () => {
  it('renders all 5 questions', () => {
    render(<FAQ />)
    expect(screen.getByText(/social media marketing benefit/i)).toBeInTheDocument()
    expect(screen.getByText(/content marketing services/i)).toBeInTheDocument()
    expect(screen.getByText(/types of digital media services/i)).toBeInTheDocument()
    expect(screen.getByText(/brand development/i)).toBeInTheDocument()
    expect(screen.getByText(/services priced/i)).toBeInTheDocument()
  })

  it('answer is hidden by default', () => {
    render(<FAQ />)
    expect(screen.queryByText(/establish thought leadership/i)).not.toBeInTheDocument()
  })

  it('answer becomes visible on question click', async () => {
    render(<FAQ />)
    const firstQ = screen.getByText(/social media marketing benefit/i)
    await userEvent.click(firstQ)
    expect(screen.getByText(/establish thought leadership/i)).toBeInTheDocument()
  })
})
