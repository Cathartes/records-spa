import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import MemberChallengeList from './components/MemberChallengeList';
import RecordBooksAdd from './components/RecordBooksAdd';
import RecordBooksView from './components/RecordBooksView';
import UsersAdd from './components/UsersAdd';
import UsersList from './components/UsersList';

import mainTheme from './config/themes/mainTheme';

const styles = theme => ({
  appContent: {
    paddingTop: 65
  }
});

class App extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <Router>
          <div>
            <Header />
            <div className={classNames(classes.appContent)}>
              <Switch>
                <Route exact path="/" component={MemberChallengeList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/members" component={UsersList} />
                <Route exact path="/members/new" component={UsersAdd} />
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

export default withStyles(styles)(App);
