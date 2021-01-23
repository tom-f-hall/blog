

import React from 'react'

import { ChakraProvider, Box } from '@chakra-ui/react'
import extendedTheme from '../theme'

// COMPONENTS
import SiteMenu from '../layout/menu'
import Header from '../components/header'
import Footer from '../components/footer'
import ThemeToggle from '../components/themeToggle'

import MobileNavigation from '../components/mobileNavigation'


// HELPERS
import { fetchAPI } from '../lib/api'



const App = ({ Component, pageProps, appProps }) => {

  return (
    <ChakraProvider resetCSS theme={extendedTheme}>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        {/* <ThemeToggle /> */}
        <Component {...pageProps} />
      </Box>
      <MobileNavigation />
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
