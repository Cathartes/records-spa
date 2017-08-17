import * as React from 'react';
import { Link } from 'react-router-dom';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet(theme => ({
  appTitle: {
    flex: 1
  }
}));

type HeaderProps = {
  classes: {
    appTitle: string
  }
};

class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" className={this.props.classes.appTitle}>
            Cathartes - A Destiny Clan
          </Typography>
          <Link to="/" className="button-link"><Button>Login</Button></Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styleSheet)(Header);
