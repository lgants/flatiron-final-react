import React, { Component } from 'react';
import {Link} from 'react-router';

export default function SnippetList(props){

  return (
    <div className='col-md-4'>
      {props.chapter.snippets.map(snippet => {return <li><Link to={`/books/${props.book.id}/chapters/${props.chapter.id}/snippets/${snippet.id}`}>{snippet.content}</Link></li>})}
    </div>
  )
}
