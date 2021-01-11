/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import Link from 'next/link'

import Nav from './nav'

const name = 'Tom Hall'
export const siteTitle = `Tom's blog`

export default function Layout({children, home, categories, seo}) {
  return (
    <div sx={{variant: 'containers.page'}}>
      {/* <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Built with Next.js & Theme-UI. Deployed on Vercel'
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}
      <Nav categories={categories} />


      { home ? (
         <>
           <img
             src="/images/profile.jpg"
             sx={{width: '8rem', height: '8rem', borderRadius: '9999px'}}
             alt={name}
           />
           <h1 sx={{variant: 'text.heading2Xl'}}>{name}</h1>
         </>
       ) : (
         <>
           <Link href="/">
             <a>
               <img
                 src="/images/profile.jpg"
                 sx={{ width: '6rem', height: '6rem', borderRadius: '9999px'}}
                 alt={name}
               />
             </a>
           </Link>
          <h2 sx={{variant: 'text.headingLg'}}>
             <Link href="/">
               <a sx={{ color: 'inherit', textDecoration: 'none'}}>{name}</a>
             </Link>
           </h2>
         </>
       )}
      }
     <main sx={{variant: 'containers.layout'}}>{children}</main>
      {!home && (
       <div sx={{margin: '3rem 0 0'}}>
         <Link href="/">
           <a>← Back to home</a>
         </Link>
       </div>
     )}
   </div>


 )
}
