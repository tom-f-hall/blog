import * as React from 'react'
import { NextPage } from 'next'

import { Heading } from '@chakra-ui/react'

import { PageTransition } from '../../components/layout/pageTransition'
import { Section } from '../../components/layout/section'

const LibraryPage: NextPage = () => {
  return (
    <PageTransition>
      <Section pt={{ base: 16, md: 32 }}>
        <Heading>Library</Heading>
      </Section>
    </PageTransition>
  )
}

export default LibraryPage
