import React, { PureComponent } from 'react';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import CircularProgress from 'material-ui/Progress/CircularProgress';

class LoadingCircle extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.loadingContainer)}>
        <CircularProgress />
      </div>
    );
  }
}

const styles = theme => ({
  loadingContainer: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center'
  }
});

export default withStyles(styles)(LoadingCircle);
