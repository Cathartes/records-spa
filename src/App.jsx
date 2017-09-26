import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { recordBooksGet } from './actions/recordBooks';

import AddRecordBook from './components/AddRecordBook';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import MemberChallengeList from './components/MemberChallengeList';
import UsersList from './components/UsersList';

import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

class App extends Component {
  componentWillMount() {
    this.props.recordBooksGet();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <div className="App-content">
              <Switch>
                <Route exact path="/" component={MemberChallengeList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/records/new" component={AddRecordBook} />
                <Route exact path="/members" component={UsersList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
