import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/Navbar'

// useScroll returns scrollY MotionValue with initial value 0 in jsdom —
// useMotionValueEvent listener never fires in tests so scrolled stays false.
// No mock needed; framer-motion works in jsdom for this pattern.

describe('Navbar', () => {
  it('renders SA MEDIA logotype', () => {
    render(<Navbar />)
    expect(screen.getByText('SA')).toBeInTheDocument()
    expect(screen.getByText('MEDIA')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact-us')
  })

  it('renders Start a project CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /start a project/i })).toHaveAttribute('href', '/contact-us')
  })

  it('toggles mobile menu on hamburger click', async () => {
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
    await userEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    await userEvent.click(screen.getByLabelText('Toggle menu'))
    const mobileHome = screen.getAllByRole('link', { name: 'Home' })[1]
    await userEvent.click(mobileHome)
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })
})
