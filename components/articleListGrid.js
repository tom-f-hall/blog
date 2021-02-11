import { useState } from 'react'
import { Wrap, WrapItem, SimpleGrid, Button, VStack } from '@chakra-ui/react'
import { List, SquaresFour as Grid } from 'phosphor-react'
import ArticleSummary from './articleSummary'

const ArticleListGrid = ({ articles }) => {

  const [ isList, setIsList ] = useState(false)

  return(
    // <Wrap spacing="30px" justify='center' align='center'>
    <>
    <VStack>
      <Button onClick={() => setIsList(!isList)}>{ isList ? <List /> : <Grid />}</Button>
      <SimpleGrid minChildWidth={ isList ? '100%' : '240px' } spacing={ !isList && '40px'} width='100%'>
        {articles.map(article => (
          // <WrapItem>
            <ArticleSummary key={article.slug} article={article} />
          // </WrapItem>
        ))}
      {/* </Wrap> */}
    </SimpleGrid>
  </VStack>
  </>
  )
}

export default ArticleListGrid
