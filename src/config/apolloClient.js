import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-USER-TOKEN': localStorage.getItem('X-USER-TOKEN'),
      'X-USER-UID': localStorage.getItem('X-USER-UID')
    }
  });
  return forward(operation);
});

const loggerLink = new ApolloLink((operation, forward) => {
  console.log(operation.operationName);
  return forward(operation).map(result => {
    console.log(`received result from ${operation.operationName}`);
    return result;
  });
});

const link = loggerLink.concat(middlewareLink).concat(httpLink);

const client = new ApolloClient({ link: link, cache: new InMemoryCache() });

export default client;
