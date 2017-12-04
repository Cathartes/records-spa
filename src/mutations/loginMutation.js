import gql from 'graphql-tag';

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
