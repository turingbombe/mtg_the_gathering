import React, { Component } from 'react';
import NavBar from './nav_bar'

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h1> Yes</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
