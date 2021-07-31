import { CONSTANTS as STYLE_CONSTANTS } from '@src/styles/constants'
import { CONSTANTS } from '@src/utils/constants'
import { css } from 'linaria'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { DESCRIPTION, LOGO_ALT, SITE_TITLE } = CONSTANTS

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="UTF-8" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <meta content={SITE_TITLE} property="og:title" />
        <meta content="website" property="og:type" />
        {/* TODO: Create the url */}
        <meta content="" property="og:url" />
        <meta content={DESCRIPTION} name="description" />
        <meta
          content={require('@public/images/logo.png')}
          property="og:image"
        />
        <meta content="summary" name="twitter:card" />
        <meta content={SITE_TITLE} name="twitter:title" />
        <meta content={DESCRIPTION} name="twitter:description" />
        <meta
          content={require('@public/images/logo.png')}
          name="twitter:image"
        />
        <meta content={LOGO_ALT} name="twitter:image:alt" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

const globals = css`
  :global() {
    html,
    body {
      height: 100vh;
      width: 100vw;
    }

    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ${STYLE_CONSTANTS.fontFamily};
      font-size: 20px;
      line-height: 1.42857;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`

export default NextApp
export { globals }
