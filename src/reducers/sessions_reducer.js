import {browserHistory} from 'react-router'

export default function sessions_reducer(state=[],action){
	switch(action.type){
		case 'LOG_IN_SUCCESS':
			sessionStorage.setItem('token', action.payload.jwt)
			browserHistory.push(`/users/${action.payload.user_id}`)
		default:
			return state
	}
}