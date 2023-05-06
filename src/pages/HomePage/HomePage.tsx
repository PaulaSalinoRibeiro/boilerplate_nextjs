/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    HomePage Component
  </div>
)

export default HomePage
