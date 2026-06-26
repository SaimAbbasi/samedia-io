import { render, screen } from '@testing-library/react'
import WhatWeOffer from '@/components/WhatWeOffer'

describe('WhatWeOffer', () => {
  it('renders three offering titles', () => {
    render(<WhatWeOffer />)
    expect(screen.getByText('BUSINESS STRATEGY')).toBeInTheDocument()
    expect(screen.getByText('BRAND BUILDING')).toBeInTheDocument()
    expect(screen.getByText('BRAND MAINTENANCE')).toBeInTheDocument()
  })

  it('renders all three descriptions', () => {
    render(<WhatWeOffer />)
    expect(screen.getByText(/innovative data analytics/i)).toBeInTheDocument()
    expect(screen.getByText(/Bespoke brand development/i)).toBeInTheDocument()
    expect(screen.getByText(/integrity.*quality/i)).toBeInTheDocument()
  })
})
