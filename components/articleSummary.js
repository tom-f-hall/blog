import { Box, Badge, Image, Button } from '@chakra-ui/react'

import { getStrapiMedia } from '../lib/media'

import Link from 'next/link'

const ArticleSummary = ({ article }) => {

  const imageUrl = getStrapiMedia(article.image)

  return (
    <Link
      as={`/article/${article.slug}`}
      href="/article/[slug]"
    >
      <Box
        maxW='300px'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        _hover={{ cursor: 'pointer', bg: 'black', color: 'white'}}
      >
        <Image src={imageUrl} alt={article.image.alternativeText} />
        <Box p={6}>
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="blue">
              {article.category.name}
            </Badge>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {article.title}
          </Box>
          <Box>
            {article.description}
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default ArticleSummary
