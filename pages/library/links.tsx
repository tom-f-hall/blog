import { NextPage } from 'next'

import PageTransition from '../../components/layout/pageTransition'
import Section from '../../components/layout/section'

import { Heading, Text } from '@chakra-ui/react'

const ToolsPage: NextPage = () => {
  return (
    <PageTransition>
      <Section>
        <Heading>Links</Heading>
        <Text>
          Below are a list of links I either find interesting, or have saved for
          future reading
        </Text>
      </Section>
    </PageTransition>
  )
}

export default ToolsPage
