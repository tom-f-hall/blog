import React from 'react'

// CHAKRA
import {
  Box,
  Flex,
  Heading,
  Img,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  Badge,
} from '@chakra-ui/react'

// NEXT
import Link from 'next/link'

// STRAPI
import { getStrapiMedia } from '../../lib/media'

interface ArticleSummaryProps {
  category: string
  title: string
  href: string
  media: string
  description: string
  author: {
    name: string
    href: string
  }
}

const ArticleSummary: JSX.Element = (props: ArticleSummaryProps) => {
  const { title, href, description, media, author, category } = props

  // const imageUrl = getStrapiMedia(article.image)

  return (
    <LinkBox
      as="article"
      bg={{ sm: mode('white', 'gray.700') }}
      shadow={{ sm: 'base' }}
      rounded={{ sm: 'md' }}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ shadow: { sm: 'lg' } }}
    >
      <Flex direction="column">
        <Img height="60" objectFit="cover" alt={title} src={media} />
        <Flex direction="column" px={{ sm: '6' }} py="5">
          <Text
            casing="uppercase"
            letterSpacing="wider"
            fontSize="xs"
            fontWeight="semibold"
            mb="2"
            color="gray.500"
          >
            {category}
          </Text>
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={href}>{title}</LinkOverlay>
          </Heading>
          <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
            {description}
          </Text>
          <Flex
            align="baseline"
            justify="space-between"
            fontSize="sm"
            color={mode('gray.600', 'gray.400')}
          >
            <Text>
              By{` `}
              {/* <Box as='a' textDecor='underline' href={author.href}>
                {author.name}
              </Box> */}
              <Text>read time</Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>

    // <LinkBox
    //   as={`/blog/article/${article.slug}`}
    //   href="/blog/article/[slug]"
    // >
    //   <Box
    //     maxW='100%'
    //     borderWidth='1px'
    //     borderRadius='lg'
    //     overflow='hidden'
    //     _hover={{ cursor: 'pointer', bg: 'black', color: 'white'}}
    //   >
    //     <Image src={imageUrl} alt={article.image.alternativeText} />
    //     <Box p={6}>
    //       <Box d="flex" alignItems="baseline">
    //         <Badge borderRadius="full" px="2" colorScheme="blue">
    //           {article.category.name}
    //         </Badge>
    //       </Box>
    //       <Box
    //         mt="1"
    //         fontWeight="semibold"
    //         as="h4"
    //         lineHeight="tight"
    //         isTruncated
    //       >
    //         {article.title}
    //       </Box>
    //       <Box>
    //         {article.description}
    //       </Box>
    //     </Box>
    //   </Box>
    // </LinkBox>
  )
}

export default ArticleSummary
