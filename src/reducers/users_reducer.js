import {browserHistory} from 'react-router'
export default function users_reducer(state=[], action){

	switch(action.type){
		case 'ADD_USER':
			sessionStorage.setItem("token", action.payload.jwt)
			browserHistory.push(`/users/${action.payload.user.id}`)
			return [...state, action.payload.user];

		default:
			return state;
	}
}
