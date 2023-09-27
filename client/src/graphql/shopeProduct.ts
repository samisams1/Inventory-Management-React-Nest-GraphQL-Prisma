import gql from "graphql-tag"
export const SHOPE_PRODUCTS = gql`
query{
    shopeProducts{
      id
      product{
        name
        price
      }
      quantity
    }
  }
`