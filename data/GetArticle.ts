import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const getArticle = async (slug: string): Promise<any> => {
  const query = gql`
    {
      articles(where: { slug: "${slug}" }) {
        id
        title
        description
        content
        image {
          url
        }
        category {
          name
        }
        publishedAt
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.articles[0]
}
