import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import MemberChallengeList from './components/MemberChallengeList/MemberChallengeList';

import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

class App extends PureComponent {
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
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
