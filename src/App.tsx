import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header/Header';
import MemberChallengeList from './components/ChallengeLists/MemberChallengeList';
import TeamStandingsList from './components/TeamStandingsList/TeamStandingsList';

import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

// TOOD: Remove this dummy data
const challenges = [
  {id: 1, name: 'First to Die'},
  {id: 2, name: 'Complete the Story'},
  {id: 3, name: 'Reach Max Level'},
  {id: 4, name: 'Reach Max Light'},
  {id: 5, name: 'Win a PvP Match'},
  {id: 6, name: 'Complete a Strike'},
  {id: 7, name: 'Obtain Exotic (Primary)'},
  {id: 8, name: 'Obtain Exotic (Elemental)'},
  {id: 9, name: 'Obtain Exotic (Power)'},
  {id: 10, name: 'Obtain Exotic (Armor)'}
];
const team = {id: 1, name: 'Alpha Team'};

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header/>
            <div className="App-content">
              <TeamStandingsList challenges={challenges} team={team} />
              <MemberChallengeList challenges={challenges} />
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
