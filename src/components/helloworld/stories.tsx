import type { Meta, StoryObj } from '@storybook/react'

import HelloWorld from '.'

const meta: Meta<typeof HelloWorld> = {

  title: 'HelloWorld',
  component: HelloWorld
}

export default meta
type Story = StoryObj<typeof HelloWorld>

export const Primary: Story = {
  render: () => <HelloWorld />
}
