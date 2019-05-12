import React, {PureComponent} from 'react';
import Search from './Seacrh';

class Navbar extends PureComponent {

  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Search />
      </div>
    );
  }
}

export default Navbar;
