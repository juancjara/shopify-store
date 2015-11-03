import React from 'react';
import {AppBar, IconButton} from 'material-ui';

import Catalog from './Catalog.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <AppBar title="Adibas" iconElementLeft={<IconButton />}/>
        <Catalog />
      </div>
    )
  }
}

export default App;

