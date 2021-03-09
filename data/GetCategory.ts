import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const getCategory = async (slug: string): Promise<any> => {
    const query = gql`
        {
            categories(where: { slug: "${slug}" }) {
                id
                name
                articles {
                    id
                    slug
                    title
                    category {
                        name
                    }
                    image {
                        url
                        alternativeText
                    }
                    description
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

    return data.categories[0]
}
