import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import CardsIndex from './components/cards/cards_index'
import SignUp from './components/sign_up'
import UserShow from './components/users/user_show'
import SetsIndex from './components/sets/sets_index'
import CardSetsShow from './components/sets/sets_show'
import CardShow from './components/cards/cards_show'

export default (
	<Route path="/" component={App}>
		<Route path="/cardsets" component={SetsIndex}>
			<Route path="/cardsets/:id" component={CardSetsShow} />
			<Route path='/cards/:id' component= {CardShow} />
		</Route>
		<Route path="/users/:id" component={UserShow} />
		<Route path="/signup" component={SignUp} />
		<Route path="/cards" component={CardsIndex} />
	</Route>
)
