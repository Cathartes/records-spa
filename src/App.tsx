import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact={true} path="/" component={Splash}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
