import React, { Component } from 'react';
import GraphContainer from './Containers/GraphContainer';
import InterfaceContainer from './Containers/InterfaceContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <header />
        <main>
          <GraphContainer />
          {/* <InterfaceContainer /> */}
        </main>
      </div>
    );
  }
}


export default App;
