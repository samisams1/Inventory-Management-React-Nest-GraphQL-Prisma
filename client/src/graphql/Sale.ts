import gql from "graphql-tag"
export const SALE_QUERY = gql`
query{
  sales{
    id
    sellerId
    vat
    status
    grossAmount
    net
    createdAt
    saleDetail{
      id
      product{
        name
      }
      price
      amount
      quantity
    }
  }
}
`
export const SALE_QUERY_DETAIL = gql`
query{
  saleDetails{
    id
    amount
    quantity
    product{
      name
      price
    }
    createdAt
  }
}
`
export const CREATE_SALE_MUTATION1 = gql`
  mutation CreateSale($productId: Int!, $storeId: Int!, $userId: Int!, $quantity: Int!) {
    createSale(input: { productId: $productId, storeId: $storeId, userId: $userId, quantity: $quantity }) {
      quantity
    }
  }
`;
export const CREATE_SALE_MUTATION = gql`
mutation CreateSale($input: CreateSaleInput!) {
  createSale(input: $input) {
    id
    sellerId
    grossAmount
    vat
    net
    saleDetail{
      price
      quantity
      amount
      product{
        name
      }
    }
  }
}
`;
export const COUNT_SALE_QUERY = gql`
query{
  totalSale
}`;

export const SELL_DETAIL_BY_SELL_ID = gql`
query SaleDetailById($id: Float!) {
  saleDetailById(id: $id) {
    id
    product {
      name
    }
    saleId
    price
    quantity
    amount
  }
}
`
export const SALE_TOTAL_PRODUCT_QUERY = gql`
query{
  saleTotalProduct 
}`;
