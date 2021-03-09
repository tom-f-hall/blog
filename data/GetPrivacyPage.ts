import { gql } from 'graphql-request'
import graphQLClient from '../../lib/graphqlClient'

export const GetPrivacyPage = async (): Promise<any> => {
  const query = gql`
    {
      privacyPage {
        content
        seo {
          metaTitle
          metaDescription
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.privacyPage
}
