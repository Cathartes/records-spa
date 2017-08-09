import * as React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <Link to="/"><RaisedButton label="Back"/></Link>
        <Link to="/test"><RaisedButton label="Test"/></Link>
      </div>
    );
  }
}

export default Header;
