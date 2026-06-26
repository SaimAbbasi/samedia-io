import { render, screen } from '@testing-library/react'
import Orb from '@/components/Orb'

describe('Orb', () => {
  it('renders image with correct alt text', () => {
    render(<Orb src="/images/orb-lime.png" alt="lime orb" />)
    expect(screen.getByAltText('lime orb')).toBeInTheDocument()
  })

  it('applies xl size class', () => {
    render(<Orb src="/images/orb-lime.png" alt="lime orb" size="xl" />)
    const img = screen.getByAltText('lime orb')
    expect(img.parentElement).toHaveClass('w-96')
  })
})
