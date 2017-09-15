import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';

import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';

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
              <Switch>
                <Route exact={true} path="/" component={Splash}/>
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
