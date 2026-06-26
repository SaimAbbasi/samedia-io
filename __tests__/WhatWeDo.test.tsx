import { render, screen } from '@testing-library/react'
import WhatWeDo from '@/components/WhatWeDo'

describe('WhatWeDo', () => {
  it('renders WHAT WE DO label', () => {
    render(<WhatWeDo />)
    expect(screen.getByText('WHAT WE DO')).toBeInTheDocument()
  })

  it('renders stacked headline lines', () => {
    render(<WhatWeDo />)
    expect(screen.getByText(/Social Media,/i)).toBeInTheDocument()
    expect(screen.getByText(/Content &/i)).toBeInTheDocument()
    expect(screen.getByText(/Digital Growth\./i)).toBeInTheDocument()
  })
})
