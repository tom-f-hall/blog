/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ArticleListGrid from '../components/articleListGrid'


import { fetchAPI } from '../lib/api'

import Date from '../components/date'

const Home = ({ articles, categories, homepage }) => {



  return (
    <Layout categories={categories} home>
      {/* <Seo seo={homepage.seo} /> */}
      <h1 sx={{variant: 'text.headingLg'}}>Latest Posts</h1>

      <ArticleListGrid articles={articles} />
    </Layout>
  )
}

export async function getStaticProps() {

  const [ articles, categories, homepage ] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
    fetchAPI('/homepage')
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
