import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetCategories = async (): Promise<any> => {
  const query = gql`
    {
      categories {
        name
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.categories
}
