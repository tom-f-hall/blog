/** @jsx jsx */
import { jsx } from 'theme-ui'


import Link from 'next/link'
import NavLink from './navlink'

const Nav = ({ categories }) => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header'
      }}>
      <NavLink href='/' name='Tom Hall' />
      <div sx={{ mx: 'auto' }} />
      { categories.map((category) => {
        return(
          <NavLink key={category.id} href={`/category/${category.name}`} name={`${category.name}`} />
        )
      }) }
    </header>
  )
}

export default Nav
