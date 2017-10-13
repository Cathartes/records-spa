import { gql } from 'react-apollo';

const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      uid
      user {
        admin
        discordName
        email
        id
      }
    }
  }
`;

export default loginMutation;
