import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ArticleListGrid from '../../components/articleListGrid'
import Section from '../../components/section'
import PageTransition from '../../components/pageTransition'

import { fetchAPI } from '../../lib/api'

const Category = ({ category, categories}) => {

  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`
  }

  return (
    <PageTransition>
      <Section>
        <Heading>{`${category.name} articles`}</Heading>
        <ArticleListGrid articles={category.articles} />
      </Section>
    </PageTransition>
  )

}

export async function getStaticPaths() {
  const categories = await fetchAPI('/categories')

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const category = ( await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI('/categories')


  return {
    props: { category, categories },
    revalidate: 1
  }
}

export default Category
