import gql from "graphql-tag"
export const CATEGORY_QUERY = gql`
query{
  categories{
    id
    name
  }
}
`
export const CREATE_CATEGORY=gql`
mutation CreateCategory($name: String!) {
  createCategory(data: { name: $name }) {
    name
  }
}
`