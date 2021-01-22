/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Styled } from 'theme-ui'

import Link from 'next/link'

import Date from './date'
import ArticleSummary from './articleSummary'

const ArticleListGrid = ({ articles }) => {

  return(
    <ul
      sx={{
        listStyle: 'none',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        m: 0,
        px: 3,
        py: 4,
      }}>
      {articles.map(article => (
        <ArticleSummary key={article.slug} article={article} />
      ))}
    </ul>
  )
}

export default ArticleListGrid
