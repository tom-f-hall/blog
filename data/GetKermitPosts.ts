import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetKermitPosts = async ({ pageParam = 0 }): Promise<any> => {
  const query = gql`
        {
            posts(limit: 3, start: ${pageParam}, sort: "posted:asc") {
                owner
                content
                posted
            }
        }
    
    `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))

  return data.posts
}
