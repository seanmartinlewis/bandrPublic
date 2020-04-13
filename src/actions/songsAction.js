import { GET_SONGS } from '../actionTypes';
import { database } from '../firebase';

export function getSongs(){
	return dispatch => {
		database.on('value', snapshot => {
			dispatch({
				type: GET_SONGS,
				payload: snapshot.val()
			})
		})
	}
}

export function saveSong(song){
	return dispatch => database.push(song);
}

export function deleteNote(id){
	return dispatch => database.child(id).remove();
}
