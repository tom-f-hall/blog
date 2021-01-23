// NEXT
import Link from 'next/link'

// CHAKRA COMPONENTS
import {
  HStack,
  Button,
  useColorMode,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

// CUSTOM COMPONENTS
import Container from './container'


const Footer = ({}) => {

  const date = new Date().getFullYear()

  const FooterLink = (props) => {

    const { href, name, ...rest } = props

    return(
      <Link href={href} passHref>
        <Button
          variant='unstyled'
          {...rest}
          color={useColorModeValue('gray.500', 'gray.600')}
          _hover={{ color: useColorModeValue('gray.600', 'gray.600')}}
        >
          {name}
        </Button>
      </Link>
    )
  }

  return (
    <Container>
      <HStack
        justify='space-between'
        w='100%'
        display={{ base: 'none', md: 'flex'}}
        py={4}
      >
        <Text fontSize='sm' color={useColorModeValue('gray.500', 'gray.600')}>
          © { date } Tom Hall{` `}
        </Text>
        <HStack spacing={4}>
          <FooterLink href='/disclaimer' name='Disclaimer' />
          <FooterLink href='/privacy' name='Privacy'/>
        </HStack>
      </HStack>
    </Container>
  )
}

export default Footer
