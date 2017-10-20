import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import recordBooksListQuery from '../../queries/recordBooksListQuery';
import { recordBooksCollapseToggle, sidenavToggle } from '../../actions/ui';

import Sidenav from './Sidenav';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isRecordBooksCollapseOpen: state.ui.isRecordBooksCollapseOpen
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
