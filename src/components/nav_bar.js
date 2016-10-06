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
		    <Link to="/signup" className='navbar-item'>Sign Up</Link>
		    <Link to="/signin" className ='navbar-item'>Sign In</Link>
	      </div>
	    </nav>
	  )
	}else{
	  return (
	    <nav className='navbar navbar-inverse'>
	      <div className='navbar-header'>
	        <Link to="/" className='navbar-brand'>Magic The Gathering: The Gathering</Link>
		    <p className='navbar-item'>LOGGED IN</p>
	      </div>
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
