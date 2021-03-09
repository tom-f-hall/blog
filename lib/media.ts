import { getStrapiURL } from './api'

interface Media {
  url: string
}

export const getStrapiMedia = (media: Media): string => {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
