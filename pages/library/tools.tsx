import { NextPage } from 'next'

import PageTransition from '../../components/layout/pageTransition'
import Section from '../../components/layout/section'

import { Heading } from '@chakra-ui/react'

const ToolsPage: NextPage = () => {
  return (
    <PageTransition>
      <Section>
        <Heading>Tools</Heading>
      </Section>
    </PageTransition>
  )
}

export default ToolsPage
