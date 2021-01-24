import React from 'react'
import { Box } from '@chakra-ui/react'

const Container = (props) => {
  return(
    <Box w='full' mx='auto' maxW='1140px' px={{ base: '6', md: '8' }} {...props} />
  )
}

export default Container
