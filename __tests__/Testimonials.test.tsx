import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Testimonials from '@/components/Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial quote by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/swift turnaround time/i)).toBeInTheDocument()
  })

  it('renders first testimonial attribution', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Roshan Uruthirakumar/i)).toBeInTheDocument()
  })

  it('navigates to next testimonial on dot click', async () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /testimonial/i })
    await userEvent.click(dots[1])
    await waitFor(() => {
      expect(screen.getByText(/Mike Kimmel/i)).toBeInTheDocument()
    })
  })
})
