import { useQuery } from 'react-query'
import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetHomePage = async (): Promise<any> => {
  const query = gql`
    {
      homepage {
        core {
          heading
          intro
          image {
            url
            alternativeText
          }
        }
        callToAction {
          display
          route
        }
        seo {
          title
          description
          image {
            url
            alternativeText
          }
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.homepage
}
