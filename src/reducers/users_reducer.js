import {browserHistory} from 'react-router'
export default function users_reducer(state=[], action){

	switch(action.type){
		case 'ADD_USER':
			sessionStorage.setItem('jwt', action.payload.jwt);
			sessionStorage.setItem('current_user', action.payload.user.id);		
			return [...state, action.payload.user];
		case 'FETCH_USERS':
			return [...state, ...action.payload]
		default:
			return state;
	}
}
