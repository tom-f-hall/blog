import { NextPage, GetStaticProps } from 'next'

// REACT-QUERY
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { GetHomePage } from '../data/GetHomePage'

// CUSTOM COMPONENTS
import { Hero } from '../components/layout/hero'
import { Container } from '../components/layout/container'
import { PageTransition } from '../components/layout/pageTransition'

import { getStrapiMedia } from '../lib/media'
import Seo from '../components/seo'
import { NextSeo } from 'next-seo'

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('homepage', GetHomePage)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const HomePage: NextPage = () => {
  const {
    isLoading: pageIsLoading,
    error: pageError,
    data: pageData,
  } = useQuery('homepage', GetHomePage)

  if (pageIsLoading) return <>Loading...</>

  if (pageError) return <>{`Error: ${pageError.message}`}</>

  const { heading, intro, image } = pageData.core

  const { display, route } = pageData.callToAction

  const { heroTitle, heroSubtitle, heroImage, blogCtaText, seo } = pageData

  const SEO = Seo(pageData.seo)

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Container>
          <Hero
            image={getStrapiMedia(image)}
            imageAlt={image.alternativeText}
            title={heading}
            subtitle={intro}
            ctaLink={`/${route}`}
            ctaText={display}
          />
        </Container>
      </PageTransition>
    </>
  )
}

export default HomePage
