import { useContext } from 'react'
import { GlobalContext } from '../pages/_app'
import { getStrapiMedia, Media } from '../lib/media'

type SeoData = {
  title: string
  description: string
  image: {
    url:  string
    alternativeText: string
  }
}

const Seo = (seo: SeoData): Record<string, unknown> => {
  const { defaultSeo, siteName } = useContext(GlobalContext)
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  }
  const fullSeo = {
    ...seoWithDefaults,
    title: `${seoWithDefaults.title} | ${siteName}`,
    shareImage: getStrapiMedia(seoWithDefaults.image),
    openGraph: {
      url: 'https://tfhall.com',
      title: `${seoWithDefaults.title} | ${siteName}`,
      description: seoWithDefaults.description,
      images: [
        {
          url: getStrapiMedia(seoWithDefaults.image),
          alt: seoWithDefaults.image.alternativeText,
        },
        // {
        //   url: 'https://www.example.ie/og-image-01.jpg',
        //   width: 800,
        //   height: 600,
        //   alt: 'Og Image Alt',
        // },
        // {
        //   url: 'https://www.example.ie/og-image-02.jpg',
        //   width: 900,
        //   height: 800,
        //   alt: 'Og Image Alt Second',
        // },
        // { url: 'https://www.example.ie/og-image-03.jpg' },
        // { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
      site_name: siteName,
    },
    twitter: {
      handle: '@tf_hall',
      site: '@site',
      cardType: 'summary_large_image',
    },
  }

  return fullSeo

  //     { fullSeo.article && <meta property="og:type" content="article" />}
}

export default Seo
