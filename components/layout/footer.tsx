import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import { LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'

import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'

const Footer = () => {
  const { linkedin, twitter, github } = useContext(GlobalContext)

  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        align="center"
      >
        <a
          aria-current="page"
          aria-label="Back to Home page"
          href="/"
          rel="home"
        >
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
          <Link href="/privacy">Privacy</Link>
          <Link>Terms and Conditions</Link>
        </Stack>
        <ButtonGroup
          marginStart={{ md: 'auto' }}
          color="gray.600"
          variant="ghost"
        >
          <IconButton
            as="a"
            target="_blank"
            href={linkedin}
            rel="noreferrer"
            aria-label="LinkedIn"
            icon={<LinkedinLogo />}
          />
          <IconButton
            as="a"
            target="_blank"
            rel="noreferrer"
            href={github}
            aria-label="Github"
            icon={<GithubLogo />}
          />
          <IconButton
            as="a"
            target="_blank"
            rel="noreferrer"
            href={twitter}
            aria-label="Twitter"
            icon={<TwitterLogo />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Footer
