import React from "react"
import Link from "next/link"
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"
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
      bg={["green.500", "green.500", "transparent", "transparent"]}
      color={["white", "white", "green.700", "green.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "green.500", "green.500"]}
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
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/how">How It works </MenuItems>
          <MenuItems to="/faetures">Features </MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["green.500", "green.500", "white", "white"]}
              bg={["white", "white", "green.500", "green.500"]}
              _hover={{
                bg: [
                  "green.100",
                  "green.100",
                  "green.600",
                  "green.600",
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
