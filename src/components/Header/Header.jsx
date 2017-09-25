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

import { sideNavToggle } from '../../actions/sideNav';
import { snackbarClose, snackbarRemove } from '../../actions/snackbars';

import SideNav from '../SideNav';

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
      isSideNavOpen,
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
              open={isSideNavOpen}
              onRequestClose={() => onMenuIconClick(false)}
            >
              <SideNav />
            </Drawer>

            <Typography type="title" className={classNames(classes.appTitle)}>
              CATHARTES
            </Typography>

            {currentUser && (
              <div className={classNames(classes.currentUser)}>
                {currentUser.attributes.email}
              </div>
            )}
            {currentUser && (
              <Link to="/logout" className="button-link">
                <Button>Logout</Button>
              </Link>
            )}
            {!currentUser && (
              <Link to="/login" className="button-link">
                <Button>Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>

        {snackbars.map(snackbar => {
          return (
            <Snackbar
              key={snackbar.id}
              open={snackbar.open}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              autoHideDuration={1500}
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
    isSideNavOpen: state.sideNav.isOpen,
    snackbars: state.snackbars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMenuIconClick: isSideNavOpen => {
      dispatch(sideNavToggle(isSideNavOpen));
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
