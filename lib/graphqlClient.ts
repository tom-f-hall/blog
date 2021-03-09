import { GraphQLClient } from 'graphql-request'

const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

const graphQLClient = new GraphQLClient(
  `${NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
  {}
)

export default graphQLClient
