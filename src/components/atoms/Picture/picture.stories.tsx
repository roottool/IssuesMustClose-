import type { FC } from 'react'

import Picture, { Props } from '@/components/atoms/Picture'

export default {
  component: Picture,
  title: 'Picture Component',
}

export const Webp: FC<Props> = () => (
  <Picture
    imageAlt="Webp sample"
    imagePath="/images/big_logo.png"
    webpPath="/images/big_logo.webp"
  />
)

export const PNG: FC<Props> = () => (
  <Picture imageAlt="PNG sample" imagePath="/images/big_logo.png" webpPath="" />
)
