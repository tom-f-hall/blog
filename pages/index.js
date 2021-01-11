/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

import Date from '../components/date'

const Home = ({ articles, categories, homepage }) => {
  console.log(categories)
  return (
    <Layout categories={categories} home>
      {/*<Seo seo={homepage.seo} /> */}
      <div>
        Welcome to my Blog. I'm Tom and I like making things.
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const [ articles, categories ] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    //fetchAPI('/homepage')
  ])

  return {
    props: { articles, categories },
    revalidate: 1,
  }
}

export default Home

// export default function Home({allPostsData}) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section sx={{variant: 'text.headingM'}}>
//         <p>Dev notes and stuff</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section sx={{variant: 'text.headingM', paddingTop: '1px'}}>
//        <h2 sx={{variant: 'text.headingLg'}}>Blog</h2>
//        <ul sx={{listStyle: 'none', padding: 0, margin: 0}}>
//          {allPostsData.map(({ id, date, title }) => (
//            <li className={{margin: '0 0 1.25rem'}} key={id}>
//             <Link href={`/posts/${id}`}>
//               <a>{title}</a>
//             </Link>
//             <br />
//             <small sx={{color:'#666'}}>
//               <Date dateString={date} />
//             </small>
//           </li>
//          ))}
//        </ul>
//      </section>
//     </Layout>
//   )
// }
