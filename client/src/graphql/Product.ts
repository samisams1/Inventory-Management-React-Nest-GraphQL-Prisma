import gql from "graphql-tag"
export const PRODUCT_QUERY = gql`
query{
  products{
    id
    name
    price
    category{
      name
    }
  }
}
`
export const CREATE_PRODUCT_MUTATION = gql`
mutation CreateProduct($name: String!, $price: Float!, $categoryId: Int!) {
  createProduct(input: { name: $name, price: $price, categoryId: $categoryId }) {
    name
  }
}
`;
export const UPDATE_PATIENT_MUTATION = gql`
mutation UpdatePost($id: Int!,$firstName: String!, $lastName: String!,$dateOfBirth:String!,$martialStatus:String!,$phoneNumber:String!,$email:String!,$address:String!,$country:String!){
  updatePost(id: $id,firstName: $firstName, lastName: $lastName,dateOfBirth:$dateOfBirth,martialStatus:$martialStatus,phoneNumber:$phoneNumber,email:$email,address:$address,country:$country) {
    id
    firstName
    lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
  }
}
`

export const DELETE_PATIENT_MUTATION = gql`
	mutation deletePatient($firstName: String!, $lastName: String!,$dateOfBirth:String!,$martialStatus:String!,$phoneNumber:String!,$email:String!,$address:String!,$country:String!) {
		deletePatient(firstName: $firstName, lastName: $lastName,dateOfBirth:$dateOfBirth,martialStatus:$martialStatus,phoneNumber:$phoneNumber,email:$email,address:$address,country:$country) {
      firstName,
      lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
		}
	}
`
export const COUNT_PRODUCT_QUERY = gql`
query{
  countProducts
}`;
export const UPDATE_STORE_MUTATION = gql`
mutation UpdateProductPrice($input: [UpdateStoreInput!]!) {
  updateProductPrice(input: $input) {
    id
  }
}
`;
export const UPDATE_PRODUCT_PRICE_MUTATION = gql`
mutation UpdateProductPrice($id: Int!, $price: Float!) {
  updateProductPrice(id: $id, input: {price: $price }) {
    price
  }
}`