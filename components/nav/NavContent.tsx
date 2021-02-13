import { Box, Button, Flex, FlexProps, HStack, useDisclosure, VisuallyHidden, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../logo'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './SubMenu'
import ThemeToggle from './ThemeToggle'
import { ToggleButton } from './ToggleButton'

import { MagnifyingGlass, Code, Pencil, Wrench, Book, Browsers  } from 'phosphor-react'

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      {
        label: 'Browse',
        href: '/blog',
        icon: <MagnifyingGlass />,
        description: 'Search and browse latest and featured blog posts'
      },
      {
        label: 'Development',
        href: '/blog/category/dev',
        icon: <Code />,
        description: 'Browse articles on software development'
      },
      {
        label: 'Random',
        href: '/blog/category/random',
        icon: <Pencil />,
        description: 'Browse articles on random subjects'
      }
    ]
  },
  { 
    label: 'Kermit',
    href: '/kermit',
  },
  {
    label: 'Library',
    href: '/library',
    children: [
      {
        label: 'Browse',
        href: '/library',
        icon: <MagnifyingGlass />,
        description: 'Search and browse library'
      },
      {
        label: 'Tools',
        href: '/library/tools',
        icon: <Wrench />,
        description: 'A compendium of computing tools'
      },
      {
        label: 'Books',
        href: '/library/books',
        icon: <Book />,
        description: 'My bookshelf!'
      },
      {
        label: 'Links',
        href: '/library/links',
        icon: <Browsers />,
        description: 'Links for now, links for later'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box as="a" rel="home" mx={[null, "auto"]}>
          <Logo h="24px"/> {/*iconColor="blue.400"*/}
        </Box>
        <Box>
          <ThemeToggle mobile={true} />
        </Box>
        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Envelope</VisuallyHidden>
         <Logo h="6"  /> {/* iconColor="blue.500" */}
      </Box>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? <Submenu.Desktop link={link} /> : <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>}
          </Box>
        ))}
      </HStack>
      <ThemeToggle mobile={false} />
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}