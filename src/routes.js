import React from 'react';
import {Route} from 'react-router';

import BookContainer from './components/book_container'
import BookShow from './components/book_show'
import ChapterContainer from './components/chapter_container'
import ChapterShow from './components/chapter_show'
import SnippetContainer from './components/snippet_container'
import SnippetShow from './components/snippet_show'


import App from './components/app';

export default (
  <Route path="/" component={App} >
    <Route path="/books" component={BookContainer}>
      <Route path="/books/:bookId" component={BookShow}/>
    </Route>
    <Route path="/books/:bookId/chapters" component={ChapterContainer} >
      <Route path="/books/:bookId/chapters/:chapterId" component={ChapterShow} />
    </Route>
    <Route path="/books/:bookId/chapters/:chapterId/snippets" component={SnippetContainer} >
      <Route path="/books/:bookId/chapters/:chapterId/snippets/:snippetId" component={SnippetShow} />
    </Route>

  </Route>
)
