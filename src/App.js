import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header/Header';
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
            <Header/>
            <div className="App-content">
              <MemberChallengeList />
              <Switch>
                <Route exact={true} path="/"/>
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
