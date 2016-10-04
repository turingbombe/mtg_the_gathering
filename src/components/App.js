import React, { Component } from 'react';
import NavBar from './nav_bar'
import SignUp from './sign_up'
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
        <Link to="/cardsets">MULTIVERSE</Link>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
