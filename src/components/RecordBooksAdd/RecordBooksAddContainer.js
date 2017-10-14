import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import createRecordBookMutation from '../../mutations/createRecordBookMutation';

import RecordBooksAdd from './RecordBooksAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(
  graphql(createRecordBookMutation)(RecordBooksAdd)
);
