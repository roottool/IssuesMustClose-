import { FC } from 'react'

export interface Props {
  imageAlt: string
  imagePath: string
  webpPath: string
}

const Picture: FC<Props> = (props) => {
  const { imageAlt, imagePath, webpPath } = props

  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <img alt={`${imageAlt}`} src={imagePath} />
    </picture>
  )
}

export default Picture
