// Next
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// React Query
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getCategory } from '../../../data/GetCategory'

// Custom
import { Section } from '../../../components/layout/section'
import { PageTransition } from '../../../components/layout/pageTransition'
import ArticleListGrid from '../../../components/blog/articleListGrid'

// Chakra
import { Heading } from '@chakra-ui/react'

// Seo
import { NextSeo } from 'next-seo'
import Seo from '../../../components/seo'
import { getStrapiMedia } from '../../../lib/media'

export const getStaticPaths: GetStaticPaths = async () => {
  // Need to align with other methods
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`
  ).then((res) => res.json())
  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient()
  const slug = params.slug
  await queryClient.prefetchQuery(['category', slug], () =>
    getCategory(slug.toString())
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Category: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data: category, error, isLoading } = useQuery(
    ['category', slug],
    () => getCategory(slug.toString())
  )

  if (isLoading) return <>Loading...</>

  if (error) return <>Error</>

  const { seo, articles } = category

  const SEO = Seo(seo)

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section>
          <Heading>{`${category.name} articles`}</Heading>
          <ArticleListGrid articles={articles} />
        </Section>
      </PageTransition>
    </>
  )
}

export default Category
