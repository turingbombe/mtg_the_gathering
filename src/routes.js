import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import WelcomeCoverflow from './components/welcome_coverflow'
import SignUp from './components/sign_up'
import SignIn from './components/sign_in'
import UserShow from './components/users/user_show'
import SetsIndex from './components/sets/sets_index'
import CardSetsShow from './components/sets/sets_show'
import CollectionsShow from './components/collections/collection_show'
import DeckShow from './components/decks/decks_show'
import DeckNew from './components/decks/decks_new'


export default (
	<Route path="/" component={App}>
		<IndexRoute component= {WelcomeCoverflow} />
		<Route path="/cardsets" component={SetsIndex}>
			<Route path="/cardsets/:id" component={CardSetsShow} />
		</Route>
		<Route path="/users/:id" component={UserShow} >
			<Route path="/users/:id/collections/:collectionId" component={CollectionsShow} />
			<Route path="/users/:id/decks/new" component={DeckNew} />
			<Route path="/users/:id/decks/:deckId" component={DeckShow} />
		</Route>
		<Route path="/signup" component={SignUp} />
		<Route path="/signin" component={SignIn} />
	</Route>
)
