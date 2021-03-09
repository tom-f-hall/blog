import { ScaleFade, useDisclosure } from '@chakra-ui/react'

export const PageTransition = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <ScaleFade initialScale={0.75} in={true}>
      {children}
    </ScaleFade>
  )
}
