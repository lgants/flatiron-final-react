import { combineReducers } from 'redux';
import booksReducer from './books_reducer';


const rootReducer =  combineReducers({
  books: booksReducer,
});

// {cats: whatever gets returned by cats reducer, dogs: whatever gets returned by dog reducer}

export default rootReducer;
