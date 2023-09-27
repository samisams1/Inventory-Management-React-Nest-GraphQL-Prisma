import gql from "graphql-tag"
export const ROLE_QUERY = gql`
query Patients {
    patients {
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