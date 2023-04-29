import { screen, render } from '@testing-library/react'

import HelloWorld from '.'

describe('<HelloWorld />', () => {
  it('should have a title', () => {
    render(<HelloWorld />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
