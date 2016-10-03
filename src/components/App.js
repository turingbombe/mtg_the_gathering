import React, { Component } from 'react';
import NavBar from './nav_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h1> Yes</h1>
        </div>
      </div>
    );
  }
}

export default App;
