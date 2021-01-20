/** @jsx jsx */
import { jsx } from 'theme-ui'

// COMPONENTS
import Layout from '../../components/layout'
import Image from '../../components/image'
import Date from '../../components/date'
import Seo from '../../components/seo'


// HELPERS
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import ReactMarkdown from 'react-markdown'

const Article = ({ article, categories }) => {
  //const imageUrl = getStrapiMedia(article.image)
  //
  console.log(article)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    //shareImage: article.image,
    article: true
  }

  // const imageUrl = getStrapiMedia(article.image);

  return(
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      {/* <Image src={imageUrl} /> */}
      <h1 sx={{ variant: 'text.headingLg'}}>{article.title}</h1>
      <h2 sx={{ variant: 'text.headingM', textTransform: 'uppercase'}}>{`in ${article.category.name}`}</h2>
      <div sx ={{color: 'secondary'}}>
        <Date dateString={article.publishedAt} />
      </div>
      <ReactMarkdown source={article.content} escapteHTML={false} />
      {/*<div data-src={imageUrl} data-srcset={imageUrl} />*/}
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles')
  return {
    paths: articles.map((article) => ({
      params: {
        slug: `${article.slug}`,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  console.log(params)

  const articles = await fetchAPI(
    `/articles?slug=${params.slug}`
  )

 // &status=published
  console.log(articles[0])

  const categories = await fetchAPI('/categories')

  return {
    props: { article: articles[0], categories },
    revalidate: 1
  }
}


export default Article
