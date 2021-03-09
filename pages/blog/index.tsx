import { NextPage, GetStaticProps } from 'next'

// REACT-QUERY
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { GetBlogPage } from '../../data/GetBlogPage'
import { GetArticles } from '../../data/GetArticles'
import { GetCategories } from '../../data/GetCategories'

// CHAKRA
import { Heading, Text, VStack } from '@chakra-ui/react'

// CUSTOM
import { Section } from '../../components/layout/section'
import { PageTransition } from '../../components/layout/pageTransition'
import Carousel from '../../components/carousel'
import ArticleListGrid from '../../components/blog/articleListGrid'
import Search from '../../components/search'

import { getStrapiMedia } from '../../lib/media'

// STRAPI QUERIES
// SEO
import { NextSeo } from 'next-seo'
import Seo from '../../components/seo'

//  GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('blog-page', GetBlogPage)
  await queryClient.prefetchQuery('categories', GetCategories)
  await queryClient.prefetchQuery('articles', GetArticles)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const BlogPage: NextPage = () => {
  const { isLoading: pageIsLoading, data: page, error: pageError } = useQuery(
    'blog-page',
    GetBlogPage
  )
  const {
    isLoading: categoriesIsLoading,
    data: categories,
    error: categoriesError,
  } = useQuery('categories', GetCategories)
  const {
    isLoading: articlesIsLoading,
    data: articles,
    error: articlesError,
  } = useQuery('articles', GetArticles)

  if (pageIsLoading) return <>Page loading...</>
  // if (pageError) return <>`Error: ${pageError.message}`</>

  const SEO = Seo(page.seo)

  const { heading, intro } = page.core

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section pt={{ base: 16, md: 32 }}>
          <VStack spacing={12}>
            <VStack>
              <Heading>{heading}</Heading>
              <Text>{intro}</Text>
            </VStack>

            <Search />

            <VStack>
              <Heading>Featured articles</Heading>
              {/* <Carousel slides={articles} /> */}
              {categoriesIsLoading && <>Loading categories... </>}
              {categoriesError && <>Error loading categories...</>}
              {!categoriesIsLoading && !categoriesError && categories
                ? categories.map((category, idx) => {
                    return <Text key={idx}>{category.name}</Text>
                  })
                : null}
            </VStack>
            <VStack>
              <Heading>Latest</Heading>
              {articlesIsLoading && <>Loading articles... </>}
              {articlesError && <>Error loading articles...</>}
              {!articlesIsLoading && !articlesError && articles ? (
                <ArticleListGrid articles={articles} />
              ) : null}
            </VStack>
          </VStack>
        </Section>
      </PageTransition>
    </>
  )
}

// export async function getStaticProps() {
//   const pageData = await fetchAPI('/blog-page')
//   const categories = await fetchAPI('/categories')
//   const articles = await fetchAPI('/articles')

//   return{
//     props: {pageData, categories, articles},
//     revalidate: 1
//   }
// }

export default BlogPage
