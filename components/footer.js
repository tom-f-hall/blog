/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from 'next/link'

const Footer = ({}) => {

  return (
    <footer
      sx={{
        fontSize: 1,
        color: 'background',
        bg: 'text',
        variant: 'styles.footer',
      }}>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: 768,
          mx: 'auto',
          px: 2,
          py: 4,
        }}>
        <Link href='/' sx={{ variant: 'styles.navlink', p: 2 }}>
          Home
        </Link>
        <Link href='/' sx={{ variant: 'styles.navlink', p: 2 }}>
          Blog
        </Link>
        <Link href='/' sx={{ variant: 'styles.navlink', p: 2 }}>
          About
        </Link>
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>© 2021 Tom Hall</div>
      </div>
    </footer>
  )
}

export default Footer
