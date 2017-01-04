import {browserHistory} from 'react-router';

export default function cards_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_COLLECTION':
			return Object.assign([],...state,action.payload)

		case 'REMOVE_CARD_FROM_COLLECTION':
		const collection = state.find(collection => collection.id == action.payload.id)
		const copyState = [...state]
		const index = copyState.indexOf(collection)
		copyState.splice(index,1,action.payload)
		return copyState
		
		case 'FETCH_USER_COLLECTION':
			return [...state,action.payload]
		default:
			return state
	}

}
