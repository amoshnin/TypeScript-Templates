// # PLUGINS IMPORTS //
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

// # COMPONENTS IMPORTS //
import { Header } from '@app/web/components/layout'
import { AppProvider, AuthProvider, StylesProvider } from '@app/web/providers'

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider>
        <StylesProvider>
          <Head>
            <title>Welcome to web!</title>
          </Head>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </StylesProvider>
      </AuthProvider>
    </AppProvider>
  )
}
