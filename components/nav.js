/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useColorMode } from 'theme-ui'

import Link from 'next/link'
import NavLink from './navlink'

const Nav = ({ categories }) => {

  const [ colourMode, setColourMode ] = useColorMode()

  const colourModes = [ 'default', 'dark', 'deep', 'funk', 'future', 'futureDark', 'polaris', 'polarisDark', 'swiss' ]

  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header'
      }}>
      <NavLink href='/' name='Tom Hall' />
      <div sx={{ mx: 'auto' }} />
      <button onClick={e => {
        const index = colourModes.indexOf(colourMode)
        const next = colourModes[(index + 1) % colourModes.length ]
        setColourMode(next)
      }}>
        Colour
      </button>
      { categories.map((category) => {
        return(
          <NavLink key={category.id} href={`/category/${category.name}`} name={`${category.name}`} />
        )
      }) }
    </header>
  )
}

export default Nav
