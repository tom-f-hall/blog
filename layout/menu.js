/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useState, useRef } from 'react'

import { Menu, Burger } from '../components/menu'
import NavLink from '../components/navlink'

const SiteMenu = (props) => {

  const [ menuOpen, setMenuOpen ] = useState(false)
  const node = useRef()

  return(
    <div ref={node}>
      <Burger open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} >
        <img
          src="/images/profile.jpg"
          sx={{width: '8rem', height: '8rem', borderRadius: '9999px'}}
          alt='Tom Hall'
        />
        <br />
        <NavLink key='home' href="/" name='Tom Hall' />
        <br />
        { props.categories.map((category) => {
          return(
            <NavLink key={category.id} href={`/category/${category.slug}`} name={`${category.name}`} />
          )
        }) }
        <br />
        <NavLink key='about' href='/about' name='About' onClick={() => setMenuOpen(false)}/>
        <NavLink key='kermit' href='/kermit' name='Kermit' />
        <NavLink key='contact' href='/contact' name='Contact' />
      </Menu>
    </div>
  )
}

export default SiteMenu
