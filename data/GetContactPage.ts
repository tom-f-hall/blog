import { gql } from 'graphql-request'
import graphQLClient from '../lib/graphqlClient'

export const GetContactPage = async(): Promise<any> => {
    const query = gql`
        {
            contactPage {
                core {
                    heading
                    intro
                    image {
                        url
                        alternativeText
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

    return data.contactPage
}