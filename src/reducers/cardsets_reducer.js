export default function cardsets_reducer(state=[], action){

	switch(action.type){
		case 'FETCH_CARDSETS':
			return action.payload;
		default:
			return state;
	}
}
