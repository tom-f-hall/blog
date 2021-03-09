import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetAboutPage = async (): Promise<any> => {
  const query = gql`
    {
      aboutPage {
        core {
          heading
          intro
          image {
            url
            alternativeText
          }
        }
        cvEvents {
          title
          date
          content
          type
          image {
            url
          }
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

  return data.aboutPage
}
