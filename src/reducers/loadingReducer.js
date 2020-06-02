import { SONGS_STATUS, USER_STATUS } from '../actionTypes'

export default function(state={}, action) {
	switch(action.type) {
		case SONGS_STATUS:
			return {...state, songs: action.payload};
		case USER_STATUS:
			return {...state, user: action.payload};
		default:
		 	return state;
	}
}
