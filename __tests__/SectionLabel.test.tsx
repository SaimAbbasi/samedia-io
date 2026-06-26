import { render, screen } from '@testing-library/react'
import SectionLabel from '@/components/SectionLabel'

describe('SectionLabel', () => {
  it('renders number and label text', () => {
    render(<SectionLabel number="01" label="WHO WE ARE" />)
    expect(screen.getByText('01 /')).toBeInTheDocument()
    expect(screen.getByText('WHO WE ARE')).toBeInTheDocument()
  })

  it('applies light variant class when light prop is true', () => {
    const { container } = render(
      <SectionLabel number="01" label="TEST" light />
    )
    expect(container.firstChild).toHaveClass('text-dark')
  })
})
