import { getStrapiMedia } from '../lib/media'

import Image from 'next/image'


const NextImage = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image)

  console.log(image)

  return(
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={style.width}
      height={style.height}
      layout='responsive'

    />
  )
}

export default NextImage
