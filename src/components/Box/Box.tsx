/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react'

interface BoxProps {}

const Box: FC<BoxProps> = () => (
  <div data-testid="Box">
    Box Component
  </div>
)

export default Box
