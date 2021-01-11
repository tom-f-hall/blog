/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from 'next/link'

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <a sx={{
        variant: 'links.nav',
        p: 2,
        ':link' : {
          color: 'text'
        },
        ':visited' : {
          color: 'text'
        },
        ':hover' : {
          fontWeight: 600,
        },
        ':active' : {
          color: 'primary'
        }
      }}>{name}</a>
    </Link>
  )
}

export default NavLink
