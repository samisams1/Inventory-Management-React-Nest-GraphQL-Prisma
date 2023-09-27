
  import gql from "graphql-tag"
export const PURCHASE_QUERY = gql`
query{
    purchases{
      id
      quantity
      product{
        name
        category{
          name
        }
      }
      store{
        name
      }
      purchaseDate
    }
  }
`
export const CREATE_PURCHASE_MUTATION = gql`
  mutation CreatePurchase($quantity: Int!, $productId: Int!, $storeId: Int!) {
    createPurchase(input: { quantity: $quantity, productId: $productId, storeId: $storeId }) {
      quantity
    }
  }
`