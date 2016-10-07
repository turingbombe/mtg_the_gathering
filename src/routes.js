import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import WelcomeCoverflow from './components/welcome_coverflow'
import SignUp from './components/sign_up'
import SignIn from './components/sign_in'
import UserShow from './components/users/user_show'
import SetsIndex from './components/sets/sets_index'
import CardSetsShow from './components/sets/sets_show'
import CardShowModal from './components/cards/cards_show_modal'
import CardShow from './components/cards/cards_show'


export default (
	<Route path="/" component={App}>
		<IndexRoute component= {WelcomeCoverflow} />
		<Route path="/cardsets" component={SetsIndex}>
			<Route path="/cardsets/:id" component={CardSetsShow} />
		</Route>
		<Route path="/users/:id" component={UserShow} />
		<Route path="/signup" component={SignUp} />
		<Route path="/signin" component={SignIn} />
	</Route>
)
