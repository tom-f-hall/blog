

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ArticleSummary from '../../components/articleSummary'

import { fetchAPI } from '../../lib/api'

const Category = ({ category, categories}) => {

  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`
  }

  return (
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      <h1>{`${category.name} articles`}</h1>
      { category.articles.map(article => {
        return (
          <ArticleSummary key={article.id} article={article} />
        )
      })}
    </Layout>
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
