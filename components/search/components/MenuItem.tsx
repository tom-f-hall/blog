import {
  Box,
  HStack,
  Text,
  useColorModeValue as mode,
  Image,
} from '@chakra-ui/react'

interface MenuItemProps {
  href: string
  image: string
  title: string
  description: string
  children?: React.ReactNode
}

export const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { image, title, description, children, href } = props
  return (
    <HStack
      as="a"
      spacing="4"
      p="3"
      rounded="md"
      className="group"
      href={href}
      transition="0.2s background"
      _hover={{ bg: mode('gray.50', 'gray.600') }}
      _focus={{
        outline: '1px dashed',
        outlineColor: 'blue.300',
        bg: 'blue.50',
      }}
    >
      {/* <Square size="12" rounded="md" bg="blue.500" color="white" fontSize="1.75rem"> */}
      <Image boxSize={12} objectFit={'cover'} src={image} />
      {/* </Square> */}
      <Box as="dl">
        <Text
          as="dt"
          fontWeight="semibold"
          transition="0.2s all"
          _groupHover={{ color: mode('blue.500', 'inherit') }}
        >
          {title}
        </Text>
        <Text
          as="dt"
          fontSize="sm"
          color={mode('gray.600', 'gray.400')}
          fontWeight="medium"
        >
          {description}
        </Text>
        {children}
      </Box>
    </HStack>
  )
}
