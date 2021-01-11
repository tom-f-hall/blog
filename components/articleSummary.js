/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const ArticleSummary = ({ article }) => {

  console.log(article)

  return (
    <Link
      as={`/article/${article.id}`} href="/article/[id]">
      <div sx={{
        variant: 'cards.primary',
        ':hover' : {
          backgroundColor: 'primary'
        },
        cursor: 'pointer'

      }}>
        <h1 sx={{ variant: 'text.headingL'}}>{article.title}</h1>
        <p>{article.summary}</p>

      </div>
    </Link>

  )


}

export default ArticleSummary
