import { ColorModeScript } from '@chakra-ui/react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import extendedTheme from '../theme'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    // Replace html lang attribute value with your language.
    return (
      <>

        <Html lang="en">
          <Head />
          <body>
            <ColorModeScript initialColorMode={extendedTheme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}
