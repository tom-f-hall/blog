import React, { useEffect, createContext } from 'react'
import App, { AppProps } from 'next/app'

// CHAKRA
import { ChakraProvider, Box } from '@chakra-ui/react'
import extendedTheme from '../theme'

// COMPONENTS
import Header from '../components/nav/Header'
import Footer from '../components/layout/footer'

// REACT QUERY
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

// SEO
import { DefaultSeo } from 'next-seo'

// ANALYTICS
import splitbee from '@splitbee/web'

// GLOBALS
// import useGlobals from '../graphql/queries/GetGlobals'

type GlobalCtx = {
  siteName: string
  linkedin: string
  twitter: string
  dev: string
  github: string
  favicon: {
    url: string
    alternativeText: string
  }
  defaultSeo: {
    title: string
    description: string
    image: {
      url: string
      alternativeText: string
    }
  }
}

export const GlobalContext = createContext<Partial<GlobalCtx>>({})

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Analytics init
  useEffect((): void => {
    splitbee.init()
  }, [])
  // ReactQuery client Ref
  const queryClientRef = React.useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  }
  // Destructure globals
  const { globals } = pageProps
  // Set up SEO
  const SEO = {
    title: globals.defaultSeo.metaTitle,
    description: globals.defaultSeo.description,
    // image: getStrapiMedia(globals.defaultSeo.shareImage),
  }
  // const { data, error, isFetching } = useGlobals()
  // Return App
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider resetCSS theme={extendedTheme}>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_GB',
              url: 'https://www.tfhall.com/',
              site_name: globals.siteName,
            }}
            twitter={{
              handle: '@tf_hall',
              site: '@site',
              cardType: 'summary_large_image',
            }}
            {...SEO}
          />
          <Header />
          <GlobalContext.Provider value={globals}>
            <Box as="main">
              {/* pb ={{ base: 24, md: 16 }} */}
              <Component {...pageProps} />
            </Box>
            <Footer />
          </GlobalContext.Provider>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

Application.getInitialProps = async (ctx) => {
  // Need to change this
  // getInitialProps is bad
  // and can't use hooks so no react-query
  // and no graphql!
  const appProps = await App.getInitialProps(ctx)
  const globals = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/global`
  ).then((res) => res.json())
  return { ...appProps, pageProps: { globals } }
}

export default Application
