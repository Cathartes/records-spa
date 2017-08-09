import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact={true} path="/" component={Splash}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
