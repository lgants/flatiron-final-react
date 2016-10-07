import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import sessionReducer from './session_reducer'

const rootReducer =  combineReducers({
  books: booksReducer,
  session: sessionReducer
});

export default rootReducer;
