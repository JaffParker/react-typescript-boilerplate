import gql from 'graphql-tag'

export const GetArtwork = gql`
  query GetArtwork($slug: String!) {
    artworkBySlug(slug: $slug) {
      id
      slug
      title
      description
      image {
        id
        urls {
          medium
        }
      }
      createdAt
    }
  }
`
