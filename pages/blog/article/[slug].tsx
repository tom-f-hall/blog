import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// REACT-QUERY
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getArticle } from '../../../data/GetArticle'
import { GetArticles } from '../../../data/GetArticles'
//import { GetCategories } from '../../graphql/queries/GetCategories'

// CHAKRA
import { Heading, Text, Box, Image } from '@chakra-ui/react'

// CUSTOM
import { Section } from '../../../components/layout/section'
import { PageTransition } from '../../../components/layout/pageTransition'
import Markdown from '../../../components/markdown/custom'
import Date from '../../../components/date'
import Seo from '../../../components/seo'

// SEO
import { NextSeo } from 'next-seo'

// DISQUS
import { DiscussionEmbed } from 'disqus-react'

import { getStrapiMedia } from '../../../lib/media'

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`
  ).then((res) => res.json())
  return {
    paths: articles.map((article) => ({
      params: {
        slug: `${article.slug}`,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient()
  const slug = params.slug
  console.log(`slug ${slug}`)
  await queryClient.prefetchQuery(['article', slug], () =>
    getArticle(slug.toString())
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Article: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { status, data: article, error, isLoading } = useQuery(
    ['article', slug],
    () => getArticle(slug.toString())
  )

  if (isLoading) return <>Loading..</>

  if (error) return <>{`Error: ${error.message}`}</>

  const imageUrl = getStrapiMedia(article.image)

  const SEO = Seo({
    title: article.title,
    description: article.description,
    image: article.image,
    // article: true,
  })

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section>
          <Image src={imageUrl} />
          <Heading>{article.title}</Heading>

          <Text>{`in ${article.category.name}`}</Text>
          <Box>
            <Date dateString={article.publishedAt} />
          </Box>
          <br />
          <br />
          <Markdown content={article.content} />
          <br />
          <br />
          <DiscussionEmbed
            shortname="tfhall-com"
            config={{
              url: 'http://localhost:3000',
              identifier: article.slug,
              title: article.title,
            }}
          />
        </Section>
      </PageTransition>
    </>
  )
}

export default Article
