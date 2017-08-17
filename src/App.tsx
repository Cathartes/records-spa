import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import Header from './components/Header/Header';
// import Splash from './components/Splash/Splash';
import ChallengeTable from './components/ChallengeTable/ChallengeTable';
import TeamTable from './components/TeamTable/TeamTable';

import './App.css';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark'
  })
});

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header/>
            <div className="App-content">
              <TeamTable team={{name: 'Team 1'}} users={[{id: 5, name: 'Justin LaForge', points: 50}]}/>
              <TeamTable team={{name: 'Team 2'}} users={[{id: 6, name: 'Tyler Hogan', points: 47}]}/>
              <ChallengeTable challenges={[{id: 5, name: 'Test', points: 54}]}/>
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
