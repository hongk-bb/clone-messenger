import { CldImage } from 'next-cloudinary'
import Image from 'next/image'

import { CustomeImageType } from '../types'

const CustomImage: React.FC<CustomeImageType> = ({
  src = '/images/placeholder.jpg',
  alt = 'Image',
  ...rest
}) => {
  const shouldUseCldImage = src?.includes('cloudinary')

  return shouldUseCldImage ? (
    <CldImage src={src} alt={alt} {...rest} />
  ) : (
    <Image src={src} alt={alt} {...rest} />
  )
}

export default CustomImage
