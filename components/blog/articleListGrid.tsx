import { useState } from 'react'
import { SimpleGrid, Button, VStack } from '@chakra-ui/react'
import { List, SquaresFour as Grid } from 'phosphor-react'
import ArticleSummary from './ArticleSummary'

import { getStrapiMedia } from '../../lib/media'

const ArticleListGrid = ({ articles }): JSX.Element => {
  const [isList, setIsList] = useState(false)

  return (
    // <Wrap spacing="30px" justify='center' align='center'>
    <>
      <VStack w="100%">
        <Button onClick={() => setIsList(!isList)}>
          {isList ? <List /> : <Grid />}
        </Button>
        <SimpleGrid
          minChildWidth={isList ? '100%' : '240px'}
          spacing={!isList && '40px'}
          width="100%"
        >
          {articles.map((article, idx) => (
            // <WrapItem>
            <ArticleSummary
              key={idx}
              category={article.category.name}
              title={article.title}
              href={`/blog/article/${article.slug}`}
              media={getStrapiMedia(article.image)}
              description={article.description}
              author={{ name: `Tom Hall`, href: `/about` }}
              // article={article}
            />
            // </WrapItem>
          ))}
          {/* </Wrap> */}
        </SimpleGrid>
      </VStack>
    </>
  )
}

export default ArticleListGrid
