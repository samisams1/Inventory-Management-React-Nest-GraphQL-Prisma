import gql from "graphql-tag"
export const STORE_QUERY = gql`
query{
  stores{
    id
    quantity
    product{
      name
      price
      
    }
  }
}
`
export const CREATE_STORE_MUTATION = gql`
  mutation CreateStore($name: String!, $location: String!) {
    createstore(input: { name: $name, location: $location }) {
      name
    }
  }
`;
export const UPDATE_STORE_QUANTITY_MUTATION = gql`
mutation UpdateStoreQuantity($id: Int!, $quantity: Int!) {
  updateStoreQuantity(id: $id, input: { quantity: $quantity }) {
    quantity
     }
   }
`;

export const UPDATE_STORE_MUTATION1 = gql`
mutation {
  updateStore(input: [
    {
      productId: 1
      quantity: 1
    },
    {
      productId: 2
      quantity: 1
    }
  ]) {
    id
  }
}
`;
export const UPDATE_STORE_MUTATION = gql`
mutation UpdateStore($input: [UpdateStoreInput!]!) {
  updateStore(input: $input) {
    id
  }
}
`;
export const ACCEPT_STORE_PRODUCT_MUTATION = gql`
mutation AcceptStoreProduct($input: [UpdateStoreInput!]!) {
  acceptStoreProduct(input: $input) {
    id
  }
}
`;
export const COUNT_STORE_PRODUCT_QUERY = gql`
query{
  countStoreProducts
}
`;



