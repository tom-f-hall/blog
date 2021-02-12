import { Box, ButtonGroup, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'


const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex direction={{ base: 'column', md: 'row' }} maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} align="center">
        <a aria-current="page" aria-label="Back to Home page" href="/" rel="home">
          {/* <Logo h="6" iconColor="blue.600" /> */}
        </a>
        <Stack
          my={{ base: '6', md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          marginStart={{ md: '8' }}
          fontSize="sm"
          spacing={{ base: '2', md: '8' }}
          textAlign={{ base: 'center', md: 'start' }}
        >
          <Text>&copy; {new Date().getFullYear()} Tom Hall</Text>
          <Link>Privacy</Link>
          <Link>Terms and Conditions</Link>
        </Stack>
        <ButtonGroup marginStart={{ md: 'auto' }} color="gray.600" variant="ghost">
          <IconButton as="a" href="www.google.com" aria-label="LinkedIn" icon={<LinkedinLogo />} />
          <IconButton as="a" href="www.google.com" aria-label="LinkedIn" icon={<GithubLogo />} />
          <IconButton as="a" href="www.google.com" aria-label="LinkedIn" icon={<TwitterLogo />} />
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Footer
