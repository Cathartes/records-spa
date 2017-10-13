import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { loginSuccess } from '../../actions/auth';
import loginMutation from './loginMutation';

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(loginMutation)(Login)
);
