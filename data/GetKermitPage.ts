import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetKermitPage = async (): Promise<any> => {
  const query = gql`
    {
      kermitPage {
        location
        profilePhoto {
          url
          alternativeText
        }
        coverPhoto {
          url
          alternativeText
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.kermitPage
}
