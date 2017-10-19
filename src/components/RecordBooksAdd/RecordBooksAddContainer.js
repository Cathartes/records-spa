import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import createRecordBookMutation from '../../mutations/createRecordBookMutation';

import RecordBooksAdd from './RecordBooksAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default compose(
  graphql(createRecordBookMutation),
  connect(mapStateToProps)
)(RecordBooksAdd);
