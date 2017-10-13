import { connect } from 'react-redux';

// import { usersPost } from '../../actions/users';

import UsersAdd from './UsersAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    usersPostRequesting: state.recordBooks.usersPostRequesting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // usersPost: discordName => {
    //   dispatch(usersPost(discordName));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAdd);
