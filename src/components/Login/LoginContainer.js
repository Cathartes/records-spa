import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import { loginSuccess, setCurrentUser } from '../../actions/auth';
import loginMutation from '../../mutations/loginMutation';

import Login from './Login';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: (token, uid) => {
      dispatch(loginSuccess(token, uid));
    },
    setCurrentUser: user => {
      dispatch(setCurrentUser(user));
    }
  };
};

export default compose(
  graphql(loginMutation),
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
