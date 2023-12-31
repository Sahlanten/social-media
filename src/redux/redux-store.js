import { legacy_createStore as createStore, combineReducers } from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	sidebarReducer
})


let store = createStore(reducers)

window.store = store


export default store