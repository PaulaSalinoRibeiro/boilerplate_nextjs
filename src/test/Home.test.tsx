import { screen, render } from '@testing-library/react'

import Home from '../pages'

describe('<Home />', () => {
  it('should have a title', () => {
    render(<Home />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
