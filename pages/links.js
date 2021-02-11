import PageTransition from '../components/pageTransition'
import Section from '../components/section'

import { Heading, Text, VStack } from '@chakra-ui/react'

const ToolsPage = (props) => {

    return(
        <PageTransition>
            <Section>
                <Heading>Links</Heading>
                <Text>Below are a list of links I either find interesting, or have saved for future reading</Text>
            </Section>
        </PageTransition>
    )
}

export default ToolsPage