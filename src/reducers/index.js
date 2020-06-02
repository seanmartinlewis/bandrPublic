import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';


const rootReducer = combineReducers({
	songs: songsReducer,
	user: userReducer,
	loading: loadingReducer,
})

export default rootReducer;
