/** @jsx jsx */
import { jsx } from 'theme-ui'

import Head from 'next/head'
import Link from 'next/link'

import Nav from './nav'
import Footer from './footer'

const name = 'Tom Hall'
export const siteTitle = `Tom's blog`


import { LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'

export default function Layout({children, home, categories, seo}) {
  return (
    <div
      sx={{
        flexWrap: 'wrap',
        display: 'flex'
      }}
    >
      <div
        sx={{
          p: 3,
          flexGrow: 1,
          flexBasis: 256,
          bg: 'primary',
        }}
      >
        Sidebar
        <Nav categories={categories} />
      </div>
    <div
      sx={{
        p: 3,
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320
      }}
    >
      { home ? (
         <>
           <img
             src="/images/profile.jpg"
             sx={{width: '8rem', height: '8rem', borderRadius: '9999px'}}
             alt={name}
           />
           <h1 sx={{variant: 'text.heading2Xl'}}>{name}</h1>
           <div>
             Welcome to my Blog. I'm Tom and I like making things, like this blog. Meta.
           </div>
          <a href='https://linkedin.com/in/thomasfhall' target="_blank">
            <LinkedinLogo size={48}/>
          </a>
          <a href="https://twitter.com/tf_hall" target="_blank">
            <TwitterLogo size={48} />
          </a>
          <a href="https://github.com/tom-f-hall" target="_blank">
           <GithubLogo size={48}/>
         </a>
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
       {!home && (
        <div sx={{margin: '3rem 0 0'}}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
       <main>{children}</main>
       <Footer />
    </div>
  </div>



    // <div sx={{variant: 'containers.page'}}>
      // <Head>
        //<link rel='icon' href='/favicon.ico' />
      //  <meta
        //  name='description'
      //    content='Built with Next.js & Theme-UI. Deployed on Vercel'
        // />
        // <meta
          // property="og:image"
          // content={`https://og-image.now.sh/${encodeURI(
            // siteTitle
          // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        // />
        // <meta name="og:title" content={siteTitle} />
        // <meta name="twitter:card" content="summary_large_image" />
      // </Head> */}
      // <Nav categories={categories} />
      // <div sx={{variant: 'containers.layout'}}>





 )
}
