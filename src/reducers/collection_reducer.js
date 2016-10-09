export default function cards_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_COLLECTION':
			return [...state,action.payload]
		case 'FETCH_USER_COLLECTION':
			return [...state, action.payload]
		default:
			return state
	}

}