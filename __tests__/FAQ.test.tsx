import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '@/components/FAQ'

describe('FAQ', () => {
  it('renders FAQ label', () => {
    render(<FAQ />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all 5 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('What services does SA Media offer?')).toBeInTheDocument()
    expect(screen.getByText('How does SA Media measure campaign success?')).toBeInTheDocument()
    expect(screen.getByText('What industries do you specialize in?')).toBeInTheDocument()
    expect(screen.getByText('How long does it take to see results?')).toBeInTheDocument()
    expect(screen.getByText('Do you work with businesses of all sizes?')).toBeInTheDocument()
  })

  it('answers are hidden by default', () => {
    render(<FAQ />)
    expect(screen.queryByText(/social media management, content creation/i)).not.toBeInTheDocument()
  })

  it('shows answer when question is clicked', async () => {
    render(<FAQ />)
    await userEvent.click(screen.getByText('What services does SA Media offer?'))
    expect(screen.getByText(/social media management, content creation/i)).toBeInTheDocument()
  })

  it('hides answer when question is clicked again', async () => {
    render(<FAQ />)
    await userEvent.click(screen.getByText('What services does SA Media offer?'))
    await userEvent.click(screen.getByText('What services does SA Media offer?'))
    await new Promise(resolve => setTimeout(resolve, 300))
    expect(screen.queryByText(/social media management, content creation/i)).not.toBeInTheDocument()
  })
})
