import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import { FC } from 'react'

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <Component {...pageProps} />
  )
}

export default NextApp
