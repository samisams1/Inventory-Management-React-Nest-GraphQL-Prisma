  import gql from "graphql-tag"
export const ORDER_QUERY = gql`
query {
    orders {
      id
      sellerId
      totalQuantity
      orderDetails{
        quantity
        product{
          name
        }
        
        
      }
    
    }
  }
`
export const ORDER_DETAIL_QUERY = gql`
query{
    order(id:1){
      id
      status
      totalQuantity
      orderDetails{
        product{
          name
        }
      }
      
    }
  }
`
export const CREATE_ORDER_MUTATION = gql`
mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    sellerId
    totalQuantity
    status
    orderDetails {
      id
      product {
        name
      }
    }
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
export const COUNT_ORDER_QUERY = gql`
query{
  countOrder
}`;