import gql from 'graphql-tag'
import { ShopItemFragments } from '../fragments/ShopItem'

export const GetShopCatalogue = gql`
  query GetShopCatalogue {
    rootMerchCategories {
      id
      slug
      name
      shopItems {
        ...CatalogueShopItem
      }
    }

    shopItems {
      ...CatalogueShopItem
    }
  }

  ${ShopItemFragments.catalogue}
`
