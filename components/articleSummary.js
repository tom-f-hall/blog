/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from 'next/link'

const ArticleSummary = ({ article }) => {

  return (
    <Link
      as={`/article/${article.slug}`} href="/article/[slug]">
      <div sx={{
        variant: 'cards.primary',
        ':hover' : {
          backgroundColor: 'primary',
          color: 'background'
        },
        cursor: 'pointer'
      }}>
        <h1 sx={{ variant: 'text.headingL'}}>{article.title}</h1>
        <p sx={{
          width: '100%',
          whiteSpace: 'nowrap',
          lines: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{article.description}</p>
      </div>
    </Link>
  )
}

export default ArticleSummary
