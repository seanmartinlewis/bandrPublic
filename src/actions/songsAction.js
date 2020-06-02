import { GET_SONGS, SONGS_STATUS } from '../actionTypes';
import { database } from '../firebase';

export function getSongs(){
	return dispatch => {
		dispatch({
			type: SONGS_STATUS,
			payload: true,
		});
		database.on('value', snapshot => {
			dispatch({
				type: GET_SONGS,
				payload: snapshot.val()
			});
			dispatch({
				type: SONGS_STATUS,
				payload: false,
			});
			// wait until something changes then try again
		}, () => {
			dispatch({
				type: SONGS_STATUS,
				payload: -1
			})
		});
	};
}

export function saveSong(song){
	return dispatch => database.push(song);
}

export function deleteNote(id){
	return dispatch => database.child(id).remove();
}
