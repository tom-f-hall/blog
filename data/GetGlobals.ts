import { useQuery } from 'react-query'
import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

const GetGlobals = async (): Promise<any> => {
  const query = gql`
    {
      global {
        siteName
        favicon {
          url
        }
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            url
          }
        }
      }
    }
  `
  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.global
}

export default function useGlobals () {
  return useQuery('globals', () => GetGlobals)
}

// export default useGlobals
