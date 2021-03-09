import { useState } from 'react'

import { GetStaticProps } from 'next'

// import NextImage from '../components/image'

import {
  Stack,
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Spinner,
} from '@chakra-ui/react'

import { MapPin, Lightning, Barbell, Buildings } from 'phosphor-react'

import { QueryClient, useQuery, useInfiniteQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { request, gql } from 'graphql-request'
import { GetKermitPage } from '../data/GetKermitPage'
import { GetKermitPosts } from '../data/GetKermitPosts'

import { Section } from '../components/layout/section'
import { PageTransition } from '../components/layout/pageTransition'
import { StatCard } from '../components/StatCard'
import { Post } from '../components/Post'
import Feedback from '../components/feedback/Feedback'

import { getStrapiMedia } from '../lib/media'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('kermit-page', GetKermitPage)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const KermitPage = (): JSX.Element => {
  const [cursor, setCursor] = useState(0)
  const {
    isLoading: pageIsLoading,
    error: pageError,
    data: pageData,
  } = useQuery('kermit-page', GetKermitPage)

  const {
    data: postsData,
    error: postsError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    'kermit-posts',
    ({ pageParam = 1 }) => GetKermitPosts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {},
    }
  )

  if (pageIsLoading)
    return (
      <Feedback title="Loading..." message="hey" icon={<Spinner />} color="" />
    )

  // if (pageError) return <>`An error has occured: ${pageError.message}`</>

  const profilePhoto = getStrapiMedia(pageData.profilePhoto)

  return (
    <PageTransition>
      <Box
        w="100%"
        h="300px"
        backgroundSize="cover"
        backgroundImage={`url(${getStrapiMedia(pageData.coverPhoto)})`}
      />
      <Flex justify="center" mt={-12}>
        <Avatar
          size="2xl"
          src={profilePhoto}
          alt={'Kermit the Greyhound'}
          css={{ border: '2px solid white' }}
        />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            Kermit H
          </Heading>
          <Text color={'gray.500'}>Greyhound Supreme</Text>
          <HStack>
            <MapPin />
            <Text color={'gray.500'}>{pageData.location}</Text>
          </HStack>
        </Stack>
      </Box>
      <Section>
        <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
            <StatCard label="Top speed" value="45mph" icon={<Lightning />} />
            <StatCard label="Weight" value="35kg" icon={<Barbell />} />
            <StatCard label="Height" value="72cm" icon={<Buildings />} />
          </SimpleGrid>
        </Box>
        <br />
        <Heading>Posts</Heading>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          // <p>Error: {error.message}</p>
          <>error</>
        ) : (
          <>
            <VStack spacing={8} maxW={['100%', '720px']} mx={'auto'}>
              {postsData.pages.map((group, i) => (
                <Box key={i}>
                  {group.map((post) => (
                    <Post
                      key={post.id}
                      name={post.owner}
                      profileImage={profilePhoto}
                      time={post.posted}
                      location={''}
                      postImage={post.media && getStrapiMedia(post.media)}
                      postContent={post.content}
                    />
                  ))}
                </Box>
              ))}
            </VStack>
            <div>
              <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
              </button>
            </div>
            <div>
              {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
          </>
        )}
      </Section>
    </PageTransition>
  )
}

export default KermitPage
