import { applyMiddleware, combineReducers, createStore } from 'redux';
import GeneralReducer from './reducers/GeneralReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	GeneralReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
