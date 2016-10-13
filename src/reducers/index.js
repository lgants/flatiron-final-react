import { combineReducers } from 'redux';
import booksReducer from './books_reducer'
import chapterVotesReducer from './chapter_votes_reducer'
import snippetVotesReducer from './snippet_votes_reducer'
import sessionsReducer from './sessions_reducer'

const rootReducer =  combineReducers({
  books: booksReducer,
  chapterVotes: chapterVotesReducer,
  snippetVotes: snippetVotesReducer,
  session: sessionsReducer
});

export default rootReducer;
