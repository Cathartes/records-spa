import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { setCurrentUser } from '../../actions/auth';
import currentUserQuery from '../../queries/currentUserQuery';

import App from './App';

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {
      dispatch(setCurrentUser(user));
    }
  };
};

export default connect(() => Object(), mapDispatchToProps)(
  graphql(currentUserQuery)(App)
);
