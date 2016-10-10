import { combineReducers } from 'redux';
import booksReducer from './books_reducer'
import votesReducer from './votes_reducer'
import sessionsReducer from './sessions_reducer'

const rootReducer =  combineReducers({
  books: booksReducer,
  votes: votesReducer,
  session: sessionsReducer
});

export default rootReducer;
