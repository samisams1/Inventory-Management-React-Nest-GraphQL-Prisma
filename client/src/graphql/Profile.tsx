import gql from "graphql-tag"
export const ME_QUERY = gql`
query{
  me{
    id
    username
    firstName
    lastName
    role
    email
  }
}
`
export const CHANGE_PASSWORD=gql`
mutation ChangePassword($newPassword:String!) {
  changePassword(id:1, password:$newPassword) {
                email
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
  }
}
`