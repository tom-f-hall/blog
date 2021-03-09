import { NextPage } from 'next'

import PageTransition from '../../components/layout/pageTransition'
import Section from '../../components/layout/section'

import { Heading } from '@chakra-ui/react'

const ToolsPage: NextPage = () => {
  return (
    <PageTransition>
      <Section>
        <Heading>Books</Heading>
      </Section>
    </PageTransition>
  )
}

export default ToolsPage
