/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useColorMode, Button } from 'theme-ui'

import Link from 'next/link'

import NavLink from './navlink'

import { PaintBucket } from 'phosphor-react'

const Nav = ({ categories }) => {

  const [ colourMode, setColourMode ] = useColorMode()

  const colourModes = [ 'default', 'dark', 'deep', 'funk', 'future', 'futureDark', 'polaris', 'polarisDark', 'swiss' ]

  return (
    <div
      sx={{
        //display: 'flex',
        // alignItems: 'center',
        // variant: 'styles.header'
      }}
    >
      <NavLink href='/' name='Home' />
      {/* <div sx={{ mx: 'auto' }} /> */}
      <br />
      <Button onClick={e => {
        const index = colourModes.indexOf(colourMode)
        const next = colourModes[(index + 1) % colourModes.length ]
        setColourMode(next)
      }}>
        <PaintBucket size={24}/>
      </Button>
      <br />
      { categories.map((category) => {
        return(
          <>
            <NavLink key={category.id} href={`/category/${category.slug}`} name={`${category.name}`} />
            <br />
          </>
        )
      }) }
    </div>
  )
}

export default Nav
