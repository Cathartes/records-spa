import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: `${process.env.REACT_APP_API_URL}/graphql`
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      const token = localStorage.getItem('X-USER-TOKEN');
      const uid = localStorage.getItem('X-USER-UID');

      req.options.headers['X-USER-TOKEN'] = token;
      req.options.headers['X-USER-UID'] = uid;

      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

export default client;
