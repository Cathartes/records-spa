import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MembersPage from '../../pages/MembersPage';

import Header from '../Header';
import Login from '../Login';
import Logout from '../Logout';
import RecordBooksAdd from '../RecordBooksAdd';
import RecordBooksView from '../RecordBooksView';

import mainTheme from '../../config/themes/mainTheme';

class App extends PureComponent {
  componentDidUpdate() {
    if (this.props.data.currentUser) {
      this.props.setCurrentUser(this.props.data.currentUser);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <Router>
          <div>
            <Header />
            <div className={classNames(classes.appContent)}>
              <Switch>
                <Route exact path="/" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/members" component={MembersPage} />
                <Route exact path="/records/new" component={RecordBooksAdd} />
                <Route exact path="/records/:id" component={RecordBooksView} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const styles = theme => ({
  appContent: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 56
    }
  }
});

export default withStyles(styles)(App);
