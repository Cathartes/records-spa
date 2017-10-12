import { ApolloClient, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${process.env.REACT_APP_API_URL}/graphql`
  })
});

export default client;
