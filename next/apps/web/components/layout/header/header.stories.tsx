import React from 'react'
import { Header, IProps } from './index'

export default {
  component: Header,
  title: 'Header',
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: IProps = {}

  return <Header />
}
