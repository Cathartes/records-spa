import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';

import { sidenavToggle } from '../../actions/sideNav';

import SideNav from '../SideNav/SideNav';

const styles = theme => ({
  appTitle: {
    flex: 1
  },
  currentUser: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Header extends PureComponent {
  render() {
    const { classes, currentUser, isSideNavOpen, onMenuIconClick } = this.props;
    return (
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
            CATHARTES RECORD BOOKS
          </Typography>

          {currentUser && (
            <div className={classNames(classes.currentUser)}>
              {currentUser.attributes.email}
            </div>
          )}
          {currentUser && <Button>Logout</Button>}
          {!currentUser && (
            <Link to="/login" className="button-link">
              <Button>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isSideNavOpen: state.sideNav.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMenuIconClick: isSideNavOpen => {
      dispatch(sidenavToggle(isSideNavOpen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Header)
);
