// REACT + NEXT
import React from 'react'
import { NextPage, GetStaticProps } from 'next'

// REACT-QUERY
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { GetPrivacyPage } from '../data/GetPrivacyPage'

// CUSTOM
import { PageTransition } from '../components/layout/pageTransition'
import { Section } from '../components/layout/section'
import Markdown from '../components/markdown/custom'
import Seo from '../components/seo'

// SEO
import { NextSeo } from 'next-seo'

/**
 * getStaticProps
 * * SSG
 * @returns
 */

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('privacy-page', GetPrivacyPage)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * PrivacyPage
 * * Main component
 * TODO: Fix the fucker
 * @returns JSX Element: Privacy page to render
 */

const PrivacyPage: NextPage = () => {
  const { status, data, error, isLoading } = useQuery(
    'privacy-page',
    GetPrivacyPage
  )

  if (isLoading) return <>Loading...</>

  if (error) return <>{`Error: ${error.message}`}</>

  console.log(status)

  const SEO = Seo(data.seo)

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section>
          <Markdown content={data.content} />
        </Section>
      </PageTransition>
    </>
  )
}

export default PrivacyPage
