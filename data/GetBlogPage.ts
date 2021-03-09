import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetBlogPage = async (): Promise<any> => {
  const query = gql`
    {
      blogPage {
        core {
          heading
          intro
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

  return data.blogPage
}
