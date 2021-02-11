import NextImage from '../components/image'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

import Section from '../components/section'
import PageTransition from '../components/pageTransition'

import { Box, Flex, Heading, Text, Wrap, WrapItem, Image, SimpleGrid, VStack, HStack } from '@chakra-ui/react'

import { MapPin, Activity, Lightning, SmileyBlank, Barbell } from 'phosphor-react'

const KermitPage = (props) => {

  return(
    <PageTransition>
      <VStack>
        <Box w='100%' h='300px' backgroundSize='cover' backgroundImage={`url(${getStrapiMedia(props.pageData.coverPhoto)})`}>
          <Section>
            
          </Section>
        </Box>
        <Section>
          <VStack spacing={12}>
          <HStack left={0}>
              <Image src={getStrapiMedia(props.pageData.profilePhoto)} borderRadius='full' boxSize='150px'></Image>   
              <VStack alignItems='left'>
                <Heading>{props.pageData.title}</Heading>
                <HStack>
                  <MapPin/>
                  <Text>{props.pageData.location}</Text>
                </HStack>
              </VStack>
            </HStack>
            <Flex 
              boxShadow='xl'
              borderRadius='2xl'
              direction='column'
              w='100%'
              align='flex-start'
            >
              <Heading>Doggo stats 🐾</Heading>
              <HStack><Activity /><Text>{`Walkies: ${props.pageData.walkies} mi.`}</Text></HStack>
              <HStack><Lightning /><Text>{`Top speed: ${props.pageData.topSpeed} mph`}</Text></HStack>
              <HStack><SmileyBlank /><Text>{`Snout length: ${props.pageData.snoutLength} cm`}</Text></HStack>
              <HStack><Barbell /><Text>{`Weight: ${props.pageData.weight} kg`}</Text></HStack>
            </Flex>
      

            <Text>No website is complete without a tribute to the glorious Kermander Kermit. All hail Kermit</Text>
              <SimpleGrid columns={[1, 2]} spacing={4}>
                {props.pageData.images.map(image => (
                  <Image src={getStrapiMedia(image)} />
                )
              )}
            </SimpleGrid>
          </VStack>
        </Section>
      </VStack>
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
