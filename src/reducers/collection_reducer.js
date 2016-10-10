import {browserHistory} from 'react-router';

export default function cards_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_COLLECTION':
			return Object.assign([],state,action.payload)
		case 'FETCH_USER_COLLECTION':
			console.log("reducer:", action.payload)
			return [...state,action.payload]
			//Object.assign([],state,action.payload)
		default:
			return state
	}

}