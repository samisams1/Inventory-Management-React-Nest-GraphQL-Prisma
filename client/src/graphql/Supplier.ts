import gql from "graphql-tag"
export const SUPPLIER_QUERY = gql`
query{
  suppliers{
    id
    name
  }
}
`
export const CREATE_SUPPLIER=gql`
mutation CreateCheckup($symptoms:String!,$diagosis:String!,$nextvist:String!) {
  createCheckup(symptoms:$symptoms,diagosis:$diagosis,checkUpDate:"sams",nextvist:$nextvist,doctor:1,patient:1) {
    symptoms
    diagosis
    checkUpDate
    nextvist
    doctor
    patient
  }
}
`

