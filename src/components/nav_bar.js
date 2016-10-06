import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class NavBar extends React.Component{
   constructor(){
   	super()
   }

   logOut(event) {
    event.preventDefault();
    this.props.actions.signOut();
  } 
  render(){
  	if (!this.props.logged_in){
	  return (
	    <nav className='navbar navbar-inverse'>
	      <div className='navbar-header'>
	        <Link to="/" className='navbar-brand'>Magic The Gathering: The Gathering</Link>
	      </div>
	      <Link to="/signup" className='navbar-item'>Sign Up</Link>
		  <Link to="/signin" className ='navbar-item'>Sign In</Link>
	    </nav>
	  )
	}else{
	  return(
	    <nav className='navbar navbar-inverse'>
	      <div className='navbar-header'>
	        <Link to="/" className='navbar-brand'>Magic The Gathering: The Gathering</Link>
	      </div>
          <Link to="/" onClick={this.logOut.bind(this)} className='navbar-item text-right'>log out</Link>
	    </nav>
	   )
	}
  }
}

function mapStateToProps(state) {  
  return {logged_in: !!sessionStorage.jwt};
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(NavBar)