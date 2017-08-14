import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <h3><Link to="/">Back</Link></h3>
        <h3><Link to="/test">Test</Link></h3>
      </div>
    );
  }
}

export default Header;
