import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';


class NavigationBar extends React.Component{
   constructor(){
   	super()
   	this.logOut = this.logOut.bind(this)
   	this.fetchCollection = this.fetchCollection.bind(this)
   }

   fetchCollection(){
   	console.log("collection:",sessionStorage.current_user)
   	this.props.actions.getUserCollection(sessionStorage.current_user).then(()=> browserHistory.push(`/users/${sessionStorage.current_user}`))
   }

   logOut(event) {
    event.preventDefault();
    this.props.actions.signOut();
  }


  render(){
  	if (!this.props.logged_in){
	  return (
      <Navbar id='navbar'>
        <Nav pullLeft>
            <img src="http://i.imgur.com/Scbeiy2.png" height='45px' width='45px'></img>
        </Nav>
        <Navbar.Brand>
          <Link id='navbrand' to="/">agic The Gathering: The Gathering</Link>
        </Navbar.Brand>
        <Nav><NavItem><Link id='navmulti' to="/cardsets">Enter The Multiverse</Link></NavItem></Nav>
	      <Nav pullRight>
  	      <NavDropdown id='navdrop' eventKey={1} title="Menu" id="basic-nav-dropdown">
  					<MenuItem eventKey={1.1}><Link to="/signup" className='Navbar-item'>Sign Up</Link></MenuItem>
  					<MenuItem eventKey={1.2}><Link to="/signin" className ='Navbar-item'>Sign In</Link></MenuItem>
  				</NavDropdown>
		    </Nav>
	    </Navbar>
	  )
	}else{
	  return(
	    <Navbar id='navbar'>
        <Nav pullLeft>
            <img src="http://i.imgur.com/Scbeiy2.png" height='45px' width='45px'></img>
        </Nav>
        <Navbar.Brand>
          <Link id='navbrand' to="/">agic The Gathering: The Gathering</Link>
        </Navbar.Brand>
        <Nav><Link id='navmulti' to="/cardsets">Enter The Multiverse</Link></Nav>
	      <Nav pullRight>
		      <NavDropdown id='navdrop' eventKey={1} title="Menu" id="basic-nav-dropdown">
	          	<MenuItem eventKey={1.1}><p onClick={this.fetchCollection}>Your Profile</p></MenuItem>
	          	<MenuItem eventKey={1.2}><Link to="/" onClick={this.logOut}>Log Out</Link></MenuItem>
	          </NavDropdown>
	      </Nav>
	    </Navbar>
	   )
	}
  }
}

// NavigationBar.propTypes = {
//   actions: PropTypes.object.isRequired
// }

function mapStateToProps(state) {
  return {logged_in: !!sessionStorage.jwt};
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(NavigationBar)
