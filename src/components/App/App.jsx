import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../Header';
import Login from '../Login';
import Logout from '../Logout';
import RecordBooksAdd from '../RecordBooksAdd';
import RecordBooksView from '../RecordBooksView';
import UsersAdd from '../UsersAdd';
import UsersList from '../UsersList';

import mainTheme from '../../config/themes/mainTheme';

import { setCurrentUser } from '../../actions/auth';
import currentUser from './currentUser';

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

const styles = theme => ({
  appContent: {
    paddingTop: 65
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {
      dispatch(setCurrentUser(user));
    }
  };
};

export default connect(() => Object(), mapDispatchToProps)(
  graphql(currentUser)(withStyles(styles)(App))
);
