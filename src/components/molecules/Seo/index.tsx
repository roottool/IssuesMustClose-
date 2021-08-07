import type { FC } from 'react'

import { Head } from '@/services/infrastructures'
import { CONSTANTS } from '@/utils/constants'

const Seo: FC = () => {
  const { DESCRIPTION, LOGO_ALT, META_KEYS, SITE_TITLE } = CONSTANTS
  const { description, og, twitter } = META_KEYS

  return (
    <Head>
      <title>{SITE_TITLE}</title>
      <link href="/favicon.ico" rel="icon" />
      <meta charSet="UTF-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <meta key={description} content={DESCRIPTION} name={description} />
      <meta
        key={og.image}
        content={require('@public/images/logo.png')}
        property={og.image}
      />
      <meta key={og.title} content={SITE_TITLE} property={og.title} />
      <meta key={og.type} content="website" property={og.type} />
      {/* TODO: Create the url */}
      <meta key={og.url} content="" property={og.url} />
      <meta key={twitter.card} content="summary" name={twitter.card} />
      <meta
        key={twitter.description}
        content={DESCRIPTION}
        name={twitter.description}
      />
      <meta
        key={twitter.image}
        content={require('@public/images/logo.png')}
        name={twitter.image}
      />
      <meta key={twitter.imageAlt} content={LOGO_ALT} name={twitter.imageAlt} />
      <meta key={twitter.title} content={SITE_TITLE} name={twitter.title} />
    </Head>
  )
}

export default Seo
