// REACT
import { useState } from 'react'

// NEXT
import Link from "next/link"
import { useRouter } from 'next/router'

// CHAKRA
import {
  chakra,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
  Divider,
  Button,
  IconButton,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuCommand,
  MenuDivider,
  Icon,
  Avatar,
} from "@chakra-ui/react"

// CUSTOM
import AvatarMenu from './avatarMenu'
import Logo from "./logo"
import Container from './container'
import ThemeToggle from './themeToggle'

// ICONS
import {
  CaretDown,
  Code,
  ShuffleAngular,
  Link as LinkIcon,
  Book,
  Wrench,
  BookOpen
} from "phosphor-react"

const NavLink = (props) => {
  const { href, name, ...rest } = props
  var isActive = false
  const { pathname } = useRouter()
  if(href !== '/') {
    const [, group] = href.split('/')
    isActive = pathname.includes(group)
  } else {
    if(href === pathname) {
      isActive = true
    }
  }
  return(
    <Link href={href} passHref>
      <Button
        aria-current={isActive ? 'page' : undefined }
        variant='ghost'
        size='md'
        {...rest}
        _activeLink={{
          color: useColorModeValue('blue.500', 'blue.200'),
        }}
        px={4}
      >
        {name}
      </Button>
    </Link>
  )
}

const Header = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      display={{base: 'none', md: 'block'}}
      position='fixed'
      w='100%'
      zIndex={99}
      borderBottomWidth='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      shadow='0 0 10px 0 rba(0,0,0,0.035)'
    >
      <Container>
        <VStack align='start' spacing={0}>
          <HStack justify='space-between' w='100%' h={16}>
            <Logo />
            <HStack ml={-4} spacing={2}>
              <NavLink href='/about' name='About'/>
              <Menu>
                <MenuButton
                  as={Button}
                  variant='ghost'
                  size='md'
                  px={4}
                  rightIcon={<CaretDown />}
                >
                  Blog
                </MenuButton>
                <MenuList>
                  <Link href='/blog'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BookOpen}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Browse</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Divider />
                  <Link href='/category/dev'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={Code}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Development</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link href='/category/random'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={ShuffleAngular}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Random</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <NavLink href='/kermit' name='Kermit'/>
              <Menu>
                <MenuButton
                  as={Button}
                  variant='ghost'
                  size='md'
                  px={4}
                  rightIcon={<CaretDown />}
                >
                  Library
                </MenuButton>
                <MenuList>
                  <Link href='/links'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={LinkIcon}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Links</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link href='/books'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={Book}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Books</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link href='/tools'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={Wrench}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        >
                        </Icon>
                        <Text>Tools</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
                <NavLink href='/contact' name='Contact'/>
              </Menu>
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

// const MenuItems = (props) => {
//   const { children, isLast, to = "/", ...rest } = props
//   return (
//     <Text
//       mb={{ base: isLast ? 0 : 8, sm: 0 }}
//       mr={{ base: 0, sm: isLast ? 0 : 8 }}
//       display="block"
//       {...rest}
//     >
//       <Link href={to}>{children}</Link>
//     </Text>
//   )
// }
//
// const Header = (props) => {
//   const [show, setShow] = useState(false)
//   const { colorMode, toggleColorMode } = useColorMode()
//   const toggleMenu = () => setShow(!show)
//
//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       w="100%"
//       mb={8}
//       p={8}
//       bg={["blue.500", "blue.500", "transparent", "transparent"]}
//       color={["white", "white", "blue.700", "blue.700"]}
//       {...props}
//     >
//       <Flex align="center">
//         <Logo
//           w="100px"
//           color={["white", "white", "blue.500", "blue.500"]}
//         />
//       </Flex>
//
//       <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
//         {show ? <XSquare /> : <DotsThreeCircle />}
//       </Box>
//
//       <Box
//         display={{ base: show ? "block" : "none", md: "block" }}
//         flexBasis={{ base: "100%", md: "auto" }}
//       >
//         <Flex
//           align={["center", "center", "center", "center"]}
//           justify={["center", "space-between", "flex-end", "flex-end"]}
//           direction={["column", "row", "row", "row"]}
//           pt={[4, 4, 0, 0]}
//         >
//
//             <Button
//               size='sm'
//               rounded='md'
//               color={['blue.500', 'blue.500', 'white', 'white']}
//               bg={['white', 'white', 'blue.500', 'blue.500']}
//               _hover={{
//                 bg: ['blue.100', 'blue.100', 'blue.600', 'blue.600']
//               }}
//               onClick={
//                 () => toggleColorMode()
//               }
//             >
//               Toggle {colorMode === "light" ? "Dark" : "Light"}
//             </Button>
//
//           <MenuItems to="/about">About</MenuItems>
//           <Menu>
//             <MenuButton as={Button}>
//               Blog
//             </MenuButton>
//             <MenuList>
//               <MenuItem><Link href='/blog'>Browse</Link></MenuItem>
//               <MenuItem><Link href='/category/dev'>Development</Link></MenuItem>
//               <MenuItem><Link href='/category/random'>Random</Link></MenuItem>
//             </MenuList>
//
//           </Menu>
//           <MenuItems to="/kermit">Kermit</MenuItems>
//           <MenuItems to="/contact" isLast>Contact</MenuItems>

          {/* <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["blue.500", "blue.500", "white", "white"]}
              bg={["white", "white", "blue.500", "blue.500"]}
              _hover={{
                bg: [
                  "blue.100",
                  "blue.100",
                  "blue.600",
                  "blue.600",
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems> */}
    //     </Flex>
    //   </Box>
    // </Flex>



export default Header
