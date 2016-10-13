export default function decks_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_DECK':
			const deck = state.find(deck => deck.id == action.payload.id)
			const copyState = [...state]
			const index = copyState.indexOf(deck)
			copyState.splice(index,1,action.payload)
			console.log("add to deck reducer", copyState)
			return copyState
		case 'FETCH_DECKS':
			return action.payload
		default:
			return state
	}
}