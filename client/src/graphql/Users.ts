import gql from "graphql-tag"
export const USER_QUERY = gql`
query{
  users{
    username
    email
    firstName
    lastName
    role
    status
  }
}
`
/*export const CREATE_USER =gql`
mutation CreateUser($firstName:String!,$lastName:String!,$email:String!,$phoneNumber:String!,$password:String!,$roleId:Int!) {
  createUser(firstName:$firstName,lastName:$lastName,email:$email,phoneNumber:$phoneNumber,password:$password,role:$roleId) {
    id
    email
    firstName
    lastName
    phoneNumber
    password
    roleId
  }
}
`*/
export const CREATE_USER =gql`
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    firstName
  }
}`
export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    createUser(input: { firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password}) {
      firstName
    }
  }
`;
export const COUNT_USER_QUERY = gql`
query{
  countUsers
}
`