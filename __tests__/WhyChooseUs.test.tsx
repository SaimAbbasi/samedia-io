import { render, screen } from '@testing-library/react'
import WhyChooseUs from '@/components/WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getAllByText(/WHY CHOOSE/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/SA MEDIA/i).length).toBeGreaterThan(0)
  })

  it('renders all 5 reasons', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Measurable Results')).toBeInTheDocument()
    expect(screen.getByText('Digital Growth Experts')).toBeInTheDocument()
    expect(screen.getByText('Lead Generation Specialists')).toBeInTheDocument()
    expect(screen.getByText('Stand Out From The Crowd')).toBeInTheDocument()
    expect(screen.getByText('Business Transformation Partners')).toBeInTheDocument()
  })
})
