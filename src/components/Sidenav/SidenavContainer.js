import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import recordBooksListQuery from '../../queries/recordBooksListQuery';
import { recordBooksCollapseToggle } from '../../actions/recordBooks';
import { sidenavToggle } from '../../actions/sidenav';

import Sidenav from './Sidenav';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isRecordBooksCollapseOpen: state.recordBooks.isRecordBooksCollapseOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: () => {
      dispatch(sidenavToggle(false));
    },
    onRecordBooksCollapseClick: isRecordBooksCollapseOpen => {
      dispatch(recordBooksCollapseToggle(isRecordBooksCollapseOpen));
    }
  };
};

export default compose(
  graphql(recordBooksListQuery),
  connect(mapStateToProps, mapDispatchToProps)
)(Sidenav);
