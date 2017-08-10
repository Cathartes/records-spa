import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Header extends React.PureComponent<{}, {}> {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title">
            Cathartes - A Destiny Clan
          </Typography>
          <Link to="/"><Button>Login</Button></Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
