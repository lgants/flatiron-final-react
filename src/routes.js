import React from 'react';
import {Route} from 'react-router';

import BookContainer from './components/book_container'
import BookNew from './components/book_new'
import BookShow from './components/book_show'
import ChapterContainer from './components/chapter_container'
import ChapterNew from './components/chapter_new'
import ChapterShow from './components/chapter_show'
import SnippetNew from './components/snippet_new'

import App from './components/app';

export default (
  <Route path="/" component={App} >
    <Route path="/books" component={BookContainer}>
      <Route path="/books/new" component={ BookNew } />
      <Route path="/books/:bookId" component={BookShow}/>
    </Route>
    <Route path="/books/:bookId/chapters" component={ChapterContainer} >
      <Route path="new" component={ ChapterNew } />
      <Route path=":chapterId" component={ChapterShow} />
      <Route path=":chapterId/snippets/new" component={SnippetNew} />
    </Route>
  </Route>
)
