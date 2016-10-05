import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import chaptersReducer from './chapters_reducer'

const rootReducer =  combineReducers({
  books: booksReducer,
  chapters: chaptersReducer,
});

export default rootReducer;
