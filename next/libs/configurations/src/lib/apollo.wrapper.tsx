// PLUGINS IMPORTS //
import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export function ApolloWrapper(props: {
  children: React.ReactNode
}): React.ReactElement {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  const authLink = setContext((_: any, { headers }: any) => {
    const token = localStorage.getItem('token')
    return {
      headers: {
        ...headers,
        authorization: token || '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
