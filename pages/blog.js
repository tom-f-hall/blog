// CHAKRA
import { Heading, Text, VStack } from '@chakra-ui/react'


import Section from '../components/section'
import PageTransition from '../components/pageTransition'
import Carousel from '../components/carousel'
import ArticleListGrid from '../components/articleListGrid'
import ArticleSummary from '../components/articleSummary'
import  { InputControl } from '../components/formInputs'
import SearchInput from '../components/searchInput'



import { fetchAPI } from '../lib/api'


const BlogPage = (props) => {

  return(
    <PageTransition>
      <Section>
        <VStack spacing={12}>
          <VStack>
            <Heading>{props.pageData.heading}</Heading>
            <Text>Browse or search for articles on my blog</Text>
          </VStack>

            <SearchInput />

          <VStack>
            <Heading>Featured articles</Heading>
            <Carousel slides={props.articles} />
            {props.categories.map(category => {
              return(
                <Text>{category.name}</Text>
              )
            })}
          </VStack>
          <VStack>
            <Heading>Latest</Heading>
            <ArticleListGrid articles={props.articles} />
          </VStack>
        </VStack>
      </Section>


    </PageTransition>
  )
}

export async function getStaticProps() {
  const pageData = await fetchAPI('/blog-page')
  const categories = await fetchAPI('/categories')
  const articles = await fetchAPI('/articles')

  return{
    props: {pageData, categories, articles},
    revalidate: 1
  }
}

export default BlogPage
