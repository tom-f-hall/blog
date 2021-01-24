// CHAKRA
import { Heading, Center } from '@chakra-ui/react'
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
        <Center>
          <Image
            src='/images/profile.jpg'
            alt='Tom Hall'
            borderRadius={99999}
            width='240px'
            height='240px'
           />
         </Center>
         <Heading align='center'>Tom Hall</Heading>
        <SocialIcons />
        <div>
          <h1>About</h1>
          <h2>My CV</h2>
          <p>bla bla bla</p>
        </div>
        <Timeline events={props.pageData.cvEvents} />
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
