// CHAKRA
import { Heading, Center, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'


// CUSTOM
import PageTransition from '../components/pageTransition'
import Section from '../components/section'
import SocialIcons from '../components/socialIcons'
import Timeline from '../components/timeline'

// HELPERS
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'


const AboutPage = (props) => {

  console.log(props.pageData)
  return(
    <PageTransition>
      <Section>
        <VStack spacing={8} align='stretch' >
          <Center>
            <Image
              src='/images/profile.jpg'
              alt='Tom Hall'
              width='240px'
              height='240px'
            />
          </Center>
          <Heading align='center'>Tom Hall</Heading>
          <SocialIcons />
          <Heading>{props.pageData.heading}</Heading>
          <Text>{props.pageData.intro}</Text>
          <Heading>Interactive CV</Heading>
          <Timeline events={props.pageData.cvEvents} />
        </VStack>
      </Section>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const pageData = await fetchAPI('/about-page')

  return{
    props: {pageData},
    revalidate: 1
  }
}

export default AboutPage
