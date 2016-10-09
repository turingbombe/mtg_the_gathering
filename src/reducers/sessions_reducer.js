import {browserHistory} from 'react-router'
import initialState from './initial_state'

export default function sessions_reducer(state= initialState.session,action){
	switch(action.type){
		case 'LOG_IN_SUCCESS':
			sessionStorage.setItem('jwt', action.payload.jwt);
			sessionStorage.setItem('current_user', action.payload.user_id);
			browserHistory.push(`/users/${action.payload.user_id}`);
			return !!sessionStorage.jwt;
		case 'LOG_OUT':
			sessionStorage.removeItem('jwt');
			browserHistory.push("/");
			return !!sessionStorage.jwt;
		default:
			return state
	}
}
