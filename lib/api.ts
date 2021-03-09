const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

export const getStrapiURL = (path: string): string => {
  return `${NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`
}
