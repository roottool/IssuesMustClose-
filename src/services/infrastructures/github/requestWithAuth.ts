import { createAppAuth } from '@octokit/auth-app'
import { RequestParameters } from '@octokit/auth-app/dist-types/types'
import { graphql } from '@octokit/graphql'

type RequestWithAuth = (
  query: string
) => <T>(variables?: RequestParameters) => Promise<T>

const requestWithAuth: RequestWithAuth = (query: string) => {
  const { env } = process
  const auth = createAppAuth({
    appId: env.NEXT_PUBLIC_APP_ID ?? '',
    installationId: env.NEXT_PUBLIC_INSTALLATION_ID ?? '',
    privateKey: env.NEXT_PUBLIC_PRIVATE_KEY ?? '',
  })
  return <T>(variables = {}) => {
    const graphqlWithAuth = graphql.defaults({
      request: {
        hook: auth.hook,
      },
    })
    return graphqlWithAuth<T>(query, variables)
  }
}

export default requestWithAuth
