import Link from 'next/link'

import { NextPage } from 'next'

import { VStack, Image, Heading, Text } from '@chakra-ui/react'

import { PageTransition } from '../components/layout/pageTransition'
import { Section } from '../components/layout/section'

const NotFound: NextPage = () => {
  return (
    <PageTransition>
      <Section>
        <VStack spacing={8}>
          <Image
            boxSize="60%"
            mx="auto"
            src="https:/source.unsplash.com/O_Xy25Dj7Mo"
          />
          <Heading>404 - Not found!</Heading>
          <Text>Nothing found on this URL. 🍩</Text>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </VStack>
      </Section>
    </PageTransition>
  )
}

export default NotFound
