import {browserHistory} from 'react-router'
import initialState from './initial_state'

export default function sessions_reducer(state= initialState.session,action){
	switch(action.type){
		case 'LOG_IN_SUCCESS':
			sessionStorage.setItem('token', action.payload.jwt)
			browserHistory.push(`/users/${action.payload.user_id}`)
			return !!sessionStorage.jwt
		default:
			return state
	}
}