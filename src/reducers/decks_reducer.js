export default function decks_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_DECK':
			return Object.assign([],...state,action.payload)
		case 'FETCH_DECKS':
			return [...state, ...action.payload]
		default:
			return state
	}
}