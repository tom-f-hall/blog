/** @jsx jsx */
import { jsx } from 'theme-ui'

import Seo from '../components/seo'
import ArticleListGrid from '../components/articleListGrid'

import { fetchAPI } from '../lib/api'

import { LinkedinLogo, TwitterLogo, GithubLogo, Code } from 'phosphor-react'

const Home = ({ articles, categories, homepage }) => {

  return (
    <>
      <img
        src="/images/profile.jpg"
        sx={{width: '8rem', height: '8rem', borderRadius: '9999px'}}
        alt='Tom Hall'
      />
      <span>
        <a href="https://dev.to/tomfhall" target="_blank">
          {/* <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Tom Hall's DEV Community Profile" height="30" width="30"/> */}
          <Code size={48} />
        </a>
        <a href='https://linkedin.com/in/thomasfhall' target="_blank">
          <LinkedinLogo size={48}/>
        </a>
        <a href="https://twitter.com/tf_hall" target="_blank">
          <TwitterLogo size={48} />
        </a>
        <a href="https://github.com/tom-f-hall" target="_blank">
         <GithubLogo size={48}/>
       </a>
     </span>
      {/* <Seo seo={homepage.seo} /> */}
      <h1 sx={{variant: 'text.headingM'}}>Welcome</h1>
      <p>Vestibulum lacinia a turpis sed maximus. Integer bibendum elit eget lectus semper, sollicitudin porttitor est mollis. Praesent ultrices ut ex vitae semper. Curabitur dignissim porttitor lorem nec sodales. Aliquam ut lobortis lacus. Ut cursus a neque eu molestie. Donec at ullamcorper tellus, ut laoreet elit. Ut interdum luctus dignissim. Mauris vulputate sollicitudin tellus eu consequat. Nulla mattis ultrices lobortis.</p>
      <h1 sx={{variant: 'text.headingLg'}}>Latest Posts</h1>
      <ArticleListGrid articles={articles} />
    </>
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
