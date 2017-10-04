import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withStyles from 'material-ui/styles/withStyles';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import MemberChallengeList from './components/MemberChallengeList';
import RecordBooksAdd from './components/RecordBooksAdd';
import UsersAdd from './components/UsersAdd';
import UsersList from './components/UsersList';

import mainTheme from './config/themes/mainTheme';

import { recordBooksGet } from './actions/recordBooks';

const styles = theme => ({
  appContent: {
    paddingTop: 65
  }
});

class App extends Component {
  componentWillMount() {
    this.props.recordBooksGet();
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
                <Route exact path="/" component={MemberChallengeList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/members" component={UsersList} />
                <Route exact path="/members/new" component={UsersAdd} />
                <Route exact path="/records/new" component={RecordBooksAdd} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    recordBooksGet: () => {
      dispatch(recordBooksGet());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
