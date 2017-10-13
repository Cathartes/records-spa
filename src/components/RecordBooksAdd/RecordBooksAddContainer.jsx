import { connect } from 'react-redux';

// import { recordBooksAdd } from '../../actions/recordBooks';

import RecordBooksAdd from './RecordBooksAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    recordBooksAddRequesting: state.recordBooks.recordBooksAddRequesting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // recordBooksAdd: name => {
    //   dispatch(recordBooksAdd(name));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecordBooksAdd);
