import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import BookContainer from './components/book_container'
import BookWelcome from './components/book_welcome'
import LogIn from './components/log_in'
import SignUp from './components/sign_up'
import BookNew from './components/book_new'
import BookShow from './components/book_show'
import FinalBookShow from './components/final_book_show'

import ChapterContainer from './components/chapter_container'
import ChapterNew from './components/chapter_new'
import ChapterShow from './components/chapter_show'
import SnippetNew from './components/snippet_new'


import App from './components/app';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ BookWelcome } />
    <Route path='/login' component={LogIn} />
    <Route path='/signup' component={SignUp} />
    <Route path="/library" component={ BookContainer } onEnter={requireAuth}>
      <Route path='/library/:bookId' component={FinalBookShow} />
    </Route >
    <Route path="/books" component={ BookContainer } onEnter={requireAuth}>
      <Route path="/books/new" component={ BookNew } />
      <Route path="/books/:bookId" component={ BookShow }/>
      </Route>
    <Route path="/books/:bookId/chapters" component={ChapterContainer} onEnter={requireAuth}>
      <Route path="new" component={ ChapterNew } />
      <Route path=":chapterId" component={ChapterShow} />
      <Route path=":chapterId/snippets/new" component={SnippetNew} />
    </Route>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.getItem('jwt')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
