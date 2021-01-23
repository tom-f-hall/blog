import {
  Box,
  Center,
  HStack,
  IconButton,
  useColorModeValue,
  Button,
  VStack,
} from '@chakra-ui/react'

import { motion, useCycle } from 'framer-motion'

// menu toggle
import MobileMenuToggle from './mobileMenuToggle'
import MobileMenuItem from './mobileMenuItem'
// menu item
import ThemeToggle from './themeToggle'

const MobileNavigation = () => {

  const [ isOpen, toggleOpen ] = useCycle(false, true)

  const links = [
    {
      route: '/',
      title: 'Home'
    },
    {
      route: '/about',
      title: 'About'
    },
    {
      route: '/blog',
      title: 'Blog'
    },
    {
      route: '/kermit',
      title: 'Kermit'
    },
    {
      route: '/library',
      title: 'library'
    },
  ]

  const menuVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    }
  }

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
    closed: {},
  }

  const MotionBox = motion.custom(Box)
  const MotionVStack = motion.custom(VStack)

  return(
    <MotionBox
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      position='fixed'
      bottom={0}
      right={0}
      left={0}
      display={{ base: 'block', md: 'none'}}
    >
      <HStack
        justify="space-around"
        align="center"
        py={2}
        mt="auto"
        height={16}
        bg={useColorModeValue("white", "gray.800")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("gray.100", "gray.700")}
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
      >
        <MobileMenuToggle toggle={() => toggleOpen()} />
        <ThemeToggle mobile />
      </HStack>
    </MotionBox>
  )
}

export default MobileNavigation
