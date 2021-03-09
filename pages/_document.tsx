import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { Html, Head, Main, NextScript } from 'next/document'
import extendedTheme from '../theme'

import { useContext } from 'react'
import { GlobalContext } from '../pages/_app'

import { getStrapiMedia } from '../lib/media'

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
    }
  }

  // static contextType = GlobalContext

  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            {/* <link rel="shortcut icon" href={getStrapiMedia(favicon)} /> */}
          </Head>
          <body>
            <ColorModeScript
              initialColorMode={extendedTheme.config.initialColorMode}
            />
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}
