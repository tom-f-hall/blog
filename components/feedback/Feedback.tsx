import React from 'react'

import { Center, Heading, Text, VStack, Box } from '@chakra-ui/react'

interface FeedbackProps {
  title: string
  message: string
  icon: React.ReactElement
  color: string
}

const Feedback = (props: FeedbackProps): JSX.Element => {
  const { title, message, icon, color } = props

  return (
    <Center>
      <VStack>
        {/* <Box
          as={icon}
          fontSize="lg"
          position="relative"
          top={{ base: '1', sm: '0' }}
        /> */}
        <Heading>{title}</Heading>
        <Text>{message}</Text>
      </VStack>
    </Center>
  )
}

export default Feedback
