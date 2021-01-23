import NextImage from '../components/image'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

import Section from '../components/section'
import PageTransition from '../components/pageTransition'

import { Heading, Text, Wrap, WrapItem, Image, SimpleGrid } from '@chakra-ui/react'

const KermitPage = (props) => {

  return(
    <PageTransition>
      <Section>
        <Heading>
          Kermit's Korner
        </Heading>
        <Text>No website is complete without a tribute to the glorious Kermander Kermit. All hail Kermit</Text>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          {props.pageData.images.map(image => (

              <Image src={getStrapiMedia(image)} />

            // <WrapItem>
              // <NextImage
              //   image={image}
              //   style={{
              //     width:'100%',
              //     height:'100px'// height:400,
              //   }}
              // />
            // </WrapItem>
            )
          )}
        </SimpleGrid>

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
