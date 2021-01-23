import { Wrap, WrapItem } from '@chakra-ui/react'
import { Styled } from 'theme-ui'

import Link from 'next/link'

import Date from './date'
import ArticleSummary from './articleSummary'

const ArticleListGrid = ({ articles }) => {

  return(
    <Wrap spacing="30px" justify="center"
    >
      {articles.map(article => (
        <WrapItem>
        <ArticleSummary key={article.slug} article={article} />
      </WrapItem>
      ))}
    </Wrap>
  )
}

export default ArticleListGrid
