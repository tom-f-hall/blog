import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

type Article = {
  id: string
  title: string
  slug: string
}

export const GetArticles = async (): Promise<Article[]> => {
  const query = gql`
    {
      articles {
        id
        title
        slug
        category {
          name
        }
        image {
          url
        }
        description
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.articles
}
