export default function decks_reducer(state=[], action){
	switch(action.type){
		case 'ADD_CARD_TO_DECK':
			const deck = state.find(deck => deck.id == action.payload.id)
			const copyState = [...state]
			const index = copyState.indexOf(deck)
			copyState.splice(index,1,action.payload)
			console.log("add to deck reducer", copyState)
			return copyState
		case 'REMOVE_CARD_FROM_DECK':
			const deckRemove = state.find(deck => deck.id == action.payload.id)
			console.log("begin reducer action", deckRemove)
			const copyStateRemove = [...state]
			const indexRemove = copyStateRemove.indexOf(deckRemove)
			copyStateRemove.splice(indexRemove,1,action.payload)
			console.log("end reducer action", copyStateRemove)
			return copyStateRemove
		case 'FETCH_DECKS':
			return action.payload
		default:
			return state
	}
}
