import React, { Component } from 'react';
import NavBar from './nav_bar'
import SignUp from './sign_up'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h1> Yes</h1>
          <SignUp />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
