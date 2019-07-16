import bookReducer from './book';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({bookReducer})
