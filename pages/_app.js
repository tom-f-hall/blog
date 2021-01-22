/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

// THEME
import { ThemeProvider, useColorMode } from 'theme-ui'
// import theme from '../style/theme'

import { ChakraProvider } from '@chakra-ui/react'
import extendedTheme from '../theme'

// COMPONENTS
import SiteMenu from '../layout/menu'
import Header from '../components/header'
import Footer from '../components/footer'
import ThemeToggle from '../components/themeToggle'

// HELPERS
import { fetchAPI } from '../lib/api'

import { PaintBucket } from 'phosphor-react'



import { Flex } from '@chakra-ui/react'


const App = ({ Component, pageProps, appProps }) => {

  return (
    <ChakraProvider >

      {/* <SiteMenu categories={appProps.categories}/> */}
      {/* <div as='main' id='route' sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px'
      }}> */}
      <Flex
        direction='column'
        align='center'
        maxW={{ xl: '1200px' }}
        m='0 auto'
        // {...pageProps}
      >
        <Header />
        {/* <ThemeToggle /> */}
        <Component {...pageProps} />
      </Flex>
      <Footer />
    </ChakraProvider>
  )
}

// App.getInitialProps = async (ctx) => {
//
//   const [ globalMeta, categories ] = await Promise.all([
//     fetchAPI('/global'),
//     fetchAPI('/categories')
//   ])
//
//   return {
//     appProps: { globalMeta, categories },
//     revalidate: 1,
//   }
// }

export default App
