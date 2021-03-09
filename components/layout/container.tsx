import { Box } from '@chakra-ui/react'

export const Container = (props): JSX.Element => {
  return (
    <Box
      w="full"
      mx="auto"
      maxW="1140px"
      px={{ base: '6', md: '8' }}
      {...props}
    />
  )
}
