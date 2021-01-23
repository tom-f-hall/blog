import { ScaleFade, useDisclosure } from '@chakra-ui/react'


const PageTransition = ({ children }) => {

  const { isOpen, onToggle } = useDisclosure()

  return(
    <ScaleFade
      initialScale={0.75}
      in={true}
    >
      { children }
    </ScaleFade>

  )
}

export default PageTransition
