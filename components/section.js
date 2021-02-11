// CHAKRA
import { Center } from '@chakra-ui/react'

//CUSTOM
import Container from './container'


// --> COMPONENT
const Section = (props) => {
  const { full, children, ...rest } = props
  return(
    <Center as='section' { ...rest } w='100%'>
      { full ? children : <Container> { children } </Container> }
    </Center>
  )
}

export default Section