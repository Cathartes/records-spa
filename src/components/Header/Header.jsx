import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';

const styles = (theme) => ({
  appTitle: {
    flex: 1
  }
});

class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" className={classNames(classes.appTitle)}>
            CATHARTES
          </Typography>
          <Link to="/" className="button-link"><Button>Login</Button></Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
