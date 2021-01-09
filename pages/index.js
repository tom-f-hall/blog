/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import Date from '../components/date'


import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section sx={{variant: 'text.headingM'}}>
        <p>Dev notes and stuff</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section sx={{variant: 'text.headingM', paddingTop: '1px'}}>
       <h2 sx={{variant: 'text.headingLg'}}>Blog</h2>
       <ul sx={{listStyle: 'none', padding: 0, margin: 0}}>
         {allPostsData.map(({ id, date, title }) => (
           <li className={{margin: '0 0 1.25rem'}} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small sx={{color:'#666'}}>
              <Date dateString={date} />
            </small>
          </li>
         ))}
       </ul>
     </section>
    </Layout>
  )
}
