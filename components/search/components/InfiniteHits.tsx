import React from 'react'

import {
  Box,
  Flex,
  SlideFade,
  useColorModeValue as mode,
  Text,
} from '@chakra-ui/react'

import { MenuItem } from './MenuItem'
import { BottomLink } from './BottomLink'

import { connectHits, PoweredBy } from 'react-instantsearch-dom'

import { MonitorPlay, Phone } from 'phosphor-react'

import { getStrapiMedia } from '../../../lib/media'

const Hits = ({ hits, hasInput }) => {
  return (
    <Box
      as={SlideFade}
      in={hasInput}
      position="relative"
      mx="auto"
      top="16"
      bg={mode('white', 'gray.700')}
      borderWidth="1px"
      pt="2"
      w="full"
      maxW="100%"
      rounded="lg"
      overflow="hidden"
      shadow="lg"
    >
      {hits.length > 0 ? (
        <Box as="ul" listStyleType="none" px="2" pb="2">
          {hits.map((hit) => (
            <Box as="li" key={hit.objectID}>
              <MenuItem
                href={`/blog/article/${hit.slug}`}
                image={getStrapiMedia(hit.image)}
                title={hit.title}
                description={hit.description}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Text>Nothing found. Try another search term</Text>
      )}
      <Flex
        borderTopWidth="1px"
        w="100%"
        fontWeight="semibold"
        color={mode('gray.600', 'gray.400')}
      >
        <BottomLink icon={<MonitorPlay />} borderEndWidth="1px">
          Watch Demo
        </BottomLink>
        <BottomLink icon={<Phone />}>
          <PoweredBy />
        </BottomLink>
      </Flex>
    </Box>
  )
}

export const ConnectedHits = connectHits(Hits)
