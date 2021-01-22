import { Box } from '@chakra-ui/react'

import Link from 'next/link'

const Footer = ({}) => {

  return (
    <Box as="footer" marginTop="2rem" fontSize="xl" bg='background'>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link
          isExternal
          textDecor="underline"
          color="black.500"
          href="https://www.nextjs.org"
        >
          Next.js
        </Link>
        , Chakra-UI, Strapi, Vercel & Heroku
      </Box>
  )
}

export default Footer
