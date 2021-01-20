import * as React from 'react'
import { createContext } from 'react'
import NextApp, { Container } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../style/theme'

export const GlobalContext = createContext({})

export default class App extends NextApp {
  render() {
    console.log(this)
    const { Component, pageProps } = this.props

    return (
      <GlobalContext.Provider>
        <Container>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </GlobalContext.Provider>
    )
  }
}

export async function getStaticProps() {

  const globalProps = await Promise(
    fetchAPI('/global'),
  )
  console.log(globalProps)


  return {
    props: { globalProps },
    revalidate: 1,
  }
}
