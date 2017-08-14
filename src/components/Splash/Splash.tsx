import * as React from 'react';

const background = require('./background.png');

class Splash extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <img src={background} alt="background" width="500"/>
      </div>
    );
  }
}

export default Splash;
