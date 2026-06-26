import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders SA MEDIA logotype', () => {
    render(<Navbar />)
    expect(screen.getByText('SA')).toBeInTheDocument()
    expect(screen.getByText('MEDIA')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '/contact-us')
  })

  it('toggles mobile menu on hamburger click', async () => {
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
    await userEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile menu' })).toBeInTheDocument()
  })
})
