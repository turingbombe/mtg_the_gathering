import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import CardsIndex from './components/cards/cards_index'
import SignUp from './components/sign_up'
import UserShow from './components/users/user_show'
import SetsIndex from './components/sets/sets_index'

export default (
	<Route path="/" component={App}>
		<Route path="/cardsets" component={SetsIndex} />
		<Route path="/users/:id" component={UserShow} />
		<Route path="/signup" component={SignUp} />
		<Route path="/cards" component={CardsIndex} />
	</Route>
)
