import {browserHistory} from 'react-router'


export default function cards_reducer(state=[], action){
	switch(action.type){
		case 'SEARCH_CARD':
			return action.payload;
		default:
			return state;
	}
}
