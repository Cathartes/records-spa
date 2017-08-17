import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import Header from './components/Header/Header';
// import Splash from './components/Splash/Splash';
// import ChallengeTable from './components/ChallengeTable/ChallengeTable';
// import TeamTable from './components/TeamTable/TeamTable';
// import MemberChallengeList from './components/ChallengeLists/MemberChallengeList';
import TeamStandingsList from './components/TeamStandingsList/TeamStandingsList';

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
              <TeamStandingsList
                challenges={[
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
                ]}
              />
              {/*<MemberChallengeList
                challenges={[
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
                ]}
              />*/}
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
