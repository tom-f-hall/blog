import { Wrap, WrapItem } from '@chakra-ui/react'
import ArticleSummary from './articleSummary'

const ArticleListGrid = ({ articles }) => {

  return(
    <Wrap spacing="30px">
      {articles.map(article => (
        <WrapItem>
          <ArticleSummary key={article.slug} article={article} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default ArticleListGrid
