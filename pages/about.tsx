import React from 'react'
import { NextPage, GetStaticProps } from 'next'

// REACT-QUERY
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { GetAboutPage } from '../data/GetAboutPage'

// CHAKRA
import { Heading, Center, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

// CUSTOM
import { PageTransition } from '../components/layout/pageTransition'
import { Section } from '../components/layout/section'
import SocialIcons from '../components/socialIcons'
import Timeline from '../components/timeline'

import { NextSeo } from 'next-seo'
import { getStrapiMedia } from '../lib/media'
import Seo from '../components/seo'

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('about-page', () => GetAboutPage)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const AboutPage: NextPage = () => {
  const { isLoading, error, data } = useQuery('about-page', GetAboutPage)

  if (isLoading) return <>'Loading..'</>

  // if (error) return <>'An error has occured: ' + {error.message}</>
  console.log(data)
  const { seo } = data
  const SEO = Seo(seo)

  const { heading, intro, image } = data.core

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section pt={{ base: 16, md: 32 }}>
          <VStack spacing={8} align="stretch">
            <Center>
              <Image
                src="/images/profile.jpg"
                alt="Tom Hall"
                width="240px"
                height="240px"
              />
            </Center>
            <Heading align="center">Tom Hall</Heading>
            <SocialIcons />
            <Heading>{heading}</Heading>
            <Text>{intro}</Text>
            <Heading>CV</Heading>
            <Timeline events={data.cvEvents} />
          </VStack>
        </Section>
      </PageTransition>
    </>
  )
}

export default AboutPage
