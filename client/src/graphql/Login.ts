import gql from "graphql-tag";
/*export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`
*/
export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      // Specify the response fields you want to retrieve upon successful login
      // For example, you might want to retrieve the user's ID or a token
      // Add those fields here
    }
  }
`;