import gql from 'graphql-tag'

export const GetGallery = gql`
  query GetGallery {
    artworks {
      id
      tags {
        id
        slug
        name
      }
      slug
      title
      description
      image {
        id
        urls {
          medium
          thumbnail
        }
      }
      createdAt
    }
  }
`
