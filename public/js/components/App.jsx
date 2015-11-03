import React from 'react';
import {AppBar, IconButton} from 'material-ui';

import Catalog from './Catalog.jsx';

class App extends React.Component {

  handleClick() {
    
  }

  render() {
    var openSource = <a
      target="_blank"
      href="https://github.com/juancjara/shopify-store">Source Code</a>;
    return (
      <div>
        <AppBar
            title="Adibas"
            iconElementLeft={<IconButton />}
            iconElementRight={openSource}/>
        <Catalog />
      </div>
    )
  }
}

export default App;

