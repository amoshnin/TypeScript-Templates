import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
