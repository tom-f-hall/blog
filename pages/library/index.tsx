import * as React from 'react'

import { Heading } from '@chakra-ui/react'

import PageTransition from '../../components/pageTransition'
import Section from '../../components/section'

const LibraryPage = () => {
  return(
    <PageTransition>
      <Section>
        <Heading>Library</Heading>
      </Section>
    </PageTransition>
  )
}

export default LibraryPage
