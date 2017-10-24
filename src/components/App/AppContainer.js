import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

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

export default compose(
  graphql(currentUserQuery),
  connect(() => Object(), mapDispatchToProps)
)(App);
