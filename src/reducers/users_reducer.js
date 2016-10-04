export default function users_reducer(state=[], action){

	switch(action.type){
		case 'ADD_USER':
			return [...state, action.payload];
		default:
			return state;
	}
}
