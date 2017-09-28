import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';

import { sidenavToggle } from '../../actions/sidenav';
import { snackbarClose, snackbarRemove } from '../../actions/snackbars';

import Sidenav from '../Sidenav';

const styles = theme => ({
  appTitle: {
    flex: 1
  },
  currentUser: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  snackbar: {
    top: 64,
    zIndex: 1000
  }
});

class Header extends PureComponent {
  handleExited = id => {
    this.props.snackbarRemove(id);
  };

  handleRequestClose = id => {
    this.props.snackbarClose(id);
  };

  render() {
    const {
      classes,
      currentUser,
      isSidenavOpen,
      onMenuIconClick,
      snackbars
    } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="Menu"
              onClick={() => onMenuIconClick(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              open={isSidenavOpen}
              onRequestClose={() => onMenuIconClick(false)}
            >
              <Sidenav />
            </Drawer>

            <Typography type="title" className={classNames(classes.appTitle)}>
              CATHARTES
            </Typography>

            {!currentUser && (
              <Button component={Link} to="/login">
                Log In
              </Button>
            )}
          </Toolbar>
        </AppBar>

        {snackbars.map(snackbar => {
          return (
            <Snackbar
              key={snackbar.id}
              open={snackbar.open}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              autoHideDuration={2000}
              onRequestClose={() => this.handleRequestClose(snackbar.id)}
              onExited={() => this.handleExited(snackbar.id)}
              message={<span>{snackbar.message}</span>}
              className={classNames(classes.snackbar)}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isSidenavOpen: state.sidenav.isOpen,
    snackbars: state.snackbars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMenuIconClick: isSidenavOpen => {
      dispatch(sidenavToggle(isSidenavOpen));
    },
    snackbarClose: id => {
      dispatch(snackbarClose(id));
    },
    snackbarRemove: id => {
      dispatch(snackbarRemove(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Header)
);
