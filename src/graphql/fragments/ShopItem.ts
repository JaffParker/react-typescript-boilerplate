import gql from 'graphql-tag'

export const ShopItemFragments = {
  catalogue: gql`
    fragment CatalogueShopItem on ShopItem {
      id
      artwork {
        id
        tags {
          id
          slug
          name
        }
        title
      }
      image {
        id
        urls {
          medium
        }
      }
      price
    }
  `,
}
