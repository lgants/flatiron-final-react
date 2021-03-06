import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';

import { fetchBooks } from './actions/book_actions'
import { fetchChapterVotes } from './actions/chapter_vote_actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

store.dispatch( fetchBooks() );


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
