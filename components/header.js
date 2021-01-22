import React from "react"
import Link from "next/link"
import { Box, Flex, Text, Button, Stack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import Logo from "./logo"

import { XSquare, DotsThreeCircle } from "phosphor-react"

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  )
}

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["blue.500", "blue.500", "transparent", "transparent"]}
      color={["white", "white", "blue.700", "blue.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "blue.500", "blue.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <XSquare /> : <DotsThreeCircle />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/about">About</MenuItems>
          <Menu>
            <MenuButton as={Button}>
              Blog
            </MenuButton>
            <MenuList>
              <MenuItem><Link href='/blog'>Browse</Link></MenuItem>
              <MenuItem><Link href='/category/dev'>Development</Link></MenuItem>
              <MenuItem><Link href='/category/random'>Random</Link></MenuItem>
            </MenuList>

          </Menu>
          <MenuItems to="/kermit">Kermit</MenuItems>
          <MenuItems to="/contact" isLast>Contact</MenuItems>
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
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
