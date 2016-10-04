import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';




const store = createStore(rootReducer, applyMiddleware(ReduxPromise));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
