import NextImage from '../components/image'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

import Section from '../components/section'
import PageTransition from '../components/pageTransition'

import { Stack, Avatar, Box, Flex, Heading, Text, Wrap, WrapItem, Image, SimpleGrid, VStack, HStack } from '@chakra-ui/react'

import { MapPin, Activity, Lightning, SmileyBlank, Barbell } from 'phosphor-react'

import { ProfileCard } from '../components/ProfileCard'
import { StatCard } from '../components/StatCard'
import { Post } from '../components/Post'

const KermitPage = (props) => {

  return(
    <PageTransition>
      <Box w='100%' h='300px' backgroundSize='cover' backgroundImage={`url(${getStrapiMedia(props.pageData.coverPhoto)})`} />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'2xl'}
          src={getStrapiMedia(props.pageData.profilePhoto)}
          alt={'Kermit the Greyhound'}
          css={{ border: '2px solid white'}}
        />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            Kermit H
          </Heading>
          <Text color={'gray.500'}>Greyhound Supreme</Text>
          <HStack><MapPin /><Text color={'gray.500'}>{props.pageData.location}</Text></HStack>
        </Stack>
      </Box>
      <Section>
        <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
            <StatCard data={{label: 'Top speed', value: '45mph'}}/>
            <StatCard data={{label: 'Weight', value: '35kg'}}/>
            <StatCard data={{label: 'Height', value: '72cm'}}/>
          </SimpleGrid>
        </Box>
        <br />
        <Heading>Posts</Heading>
        <VStack spacing={8} maxW={'100%', '720px'} mx={'auto'}>
          { props.pageData.images.map( (image, idx) => (
            <Post
              key={idx}
              name={'Kermit H'}
              profileImage={getStrapiMedia(props.pageData.profilePhoto)}
              time={'15 mins ago'}
              location={''}
              postImage={getStrapiMedia(image)}
              postContent={'Got my balls out for a scratch'}
            />
          ))}
        </VStack>


        {/* <SimpleGrid columns={[1, 2]} spacing={4}>
            {props.pageData.images.map(image => (
              <Image src={getStrapiMedia(image)} />
            )
          )}
        </SimpleGrid> */}
      </Section>  
    </PageTransition>
  )
}

export async function getStaticProps() {

  const pageData = await fetchAPI('/kermit-page')

  return {
    props: { pageData },
    revalidate: 1
  }

}

export default KermitPage
