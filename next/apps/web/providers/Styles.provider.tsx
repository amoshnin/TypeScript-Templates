// PLUGINS IMPORTS //
import React from 'react'

// COMPONENTS IMPORTS //
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  children: React.ReactNode
}

export function StylesProvider(props: IProps): React.ReactElement {
  const colors = {}
  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {props.children}
    </ChakraProvider>
  )
}
