import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import CardsIndex from './components/cards_index'

export default (
	<Route path="/" component={App}>
		<Route path="/cards" component={CardsIndex} />
	</Route>
)
