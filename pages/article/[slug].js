
// COMPONENTS
import Section from '../../components/section'
import PageTransition from '../../components/pageTransition'


import Date from '../../components/date'
import Seo from '../../components/seo'

import { Heading, Text, Box, Image } from '@chakra-ui/react'

import ChakraUIRenderer from 'chakra-ui-markdown-renderer'


// HELPERS
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import ReactMarkdown from 'react-markdown'

import { DiscussionEmbed } from 'disqus-react'

import { useRouter } from 'next/router'


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
    <PageTransition>
      <Section>
        <Image src={getStrapiMedia(article.image)}/>
        <Heading>{article.title}</Heading>

        <Text>{`in ${article.category.name}`}</Text>
        <Box>
          <Date dateString={article.publishedAt} />
        </Box>
        <br />
        <br />
        <ReactMarkdown renderers={ChakraUIRenderer()} source={article.content} escapteHTML={false} />
        <br />
        <br />
        <DiscussionEmbed
          shortname='tfhall-com'
          config={
            {
              url: 'http://localhost:3000',
              identifier: article.slug,
              title: article.title,
            }
          }
        />
    </Section>
  </PageTransition>
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
