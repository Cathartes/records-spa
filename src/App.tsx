import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div>
            <Route exact={true} path="/" component={Splash}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
