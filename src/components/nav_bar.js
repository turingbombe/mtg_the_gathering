import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class NavBar extends React.Component{
  render(){
  	if (this.props.logged_in){
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
	  return (
	    <nav className='navbar navbar-inverse'>
	      <div className='navbar-header'>
	        <Link to="/" className='navbar-brand'>Magic The Gathering: The Gathering</Link>
	      </div>
	      <p className='navbar-item text-right' style={{color: "red"}}>LOGGED IN</p>
	    </nav>
	    )
	}
  }
}

function mapStateToProps(state, ownProps) {  
  return {logged_in: !!sessionStorage.jwt};
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(NavBar)
