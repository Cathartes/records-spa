import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import withStyles from 'material-ui/styles/withStyles';

import { recordBooksView } from '../../actions/recordBooks';

const styles = theme => ({});

class MemberChallengeList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(recordBooksView(1));
  }

  render() {
    const { classes, recordBook, recordBookRequesting } = this.props;
    return (
      <div>
        {recordBookRequesting && <div>Loading</div>}

        {recordBook && <div>{recordBook.attributes.name}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recordBook: state.recordBooks.recordBooksView,
    recordBookRequesting: state.recordBooks.recordBooksViewRequesting
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(MemberChallengeList)
);
