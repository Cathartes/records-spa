import React, { PureComponent } from 'react';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import recordBookLogo from './Season1.svg';

class Splash extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.splashContainer)}>
        <img
          alt="Cathartes Season 1"
          className={classNames(classes.splashImage)}
          src={recordBookLogo}
        />
      </div>
    );
  }
}

const styles = theme => ({
  splashContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  splashImage: {
    height: '80%',
    position: 'absolute',
    top: 80
  }
});

export default withStyles(styles)(Splash);
