import { Box, SimpleGrid } from '@chakra-ui/react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ArticleListGrid from '../../components/articleListGrid'

import { fetchAPI } from '../../lib/api'

const Category = ({ category, categories}) => {

  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`
  }

  return (
    <Box
    //   align='center'
    //   px={8}
    //   mb={16}
    >
      <h1>{`${category.name} articles`}</h1>
      <ArticleListGrid articles={category.articles} />



    </Box>

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
