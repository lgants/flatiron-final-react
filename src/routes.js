import React from 'react';
import {Route} from 'react-router';

import BookContainer from './components/book_container'
import BookShow from './components/book_show'
import ChapterContainer from './components/chapter_container'
import ChapterShow from './components/chapter_show'


import App from './components/app';

export default (
  <Route path="/" component={App} >
    <Route path="/books" component={BookContainer}>
      <Route path="/books/:id" component={BookShow}/>
    </Route>
    <Route path="/books/:id/chapters" component={ChapterContainer} >
      <Route path="/books/:id/chapters/:id" component={ChapterShow} />
    </Route>

  </Route>
)
