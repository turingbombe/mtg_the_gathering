import React from 'react';
import {Link} from 'react-router';

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <Link to="/" className='navbar-brand'>Magic The Gathering: The Gathering</Link>
        <Link to="/signup" className='navbar-item'>Sign Up</Link>
        <Link to="/signin" className ='navbar-item'>Sign In</Link>

      </div>
    </nav>
  )
}
