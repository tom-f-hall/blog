import { AppProps } from 'next/app'


import React from 'react'

import { ChakraProvider, Box } from '@chakra-ui/react'
import extendedTheme from '../theme'

// COMPONENTS
import Header from '../components/nav/Header'
import Footer from '../components/footer'


// HELPERS
import { fetchAPI } from '../lib/api'


const App = ({ Component, pageProps } : AppProps) => {

  return (
    <ChakraProvider resetCSS theme={extendedTheme}>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  )
}

export default App
