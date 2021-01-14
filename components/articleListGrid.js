/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Styled } from 'theme-ui'

import Link from 'next/link'

import Date from './date'

const ArticleListGrid = ({ articles }) => {

  console.log(articles)

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
        <li key={article.id}
          sx={{
          }}>
          <Styled.h2
            sx={{
              m: 0,
            }}>
            {article.title}
            {/* <Link to={`${article.id}`}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                ':hover,:focus': {
                  color: 'primary',
                  textDecoration: 'underline',
                }
              }}>
              {article.title}
            </Link> */}
          </Styled.h2>
          <Date dateString={article.published_at} />
          {/* <small sx={{ fontWeight: 'bold' }}>{article.published_at}</small> */}
          <Styled.p
            sx={{
              m: 0,
            }}>
            {article.summary}
          </Styled.p>
        </li>
      ))}
    </ul>
  )
}

export default ArticleListGrid
