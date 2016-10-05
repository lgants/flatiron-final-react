import React, { Component } from 'react';
import {Link} from 'react-router';

export default function ChapterList(props){
  return (
    <div className='col-md-4'>
      {props.book.chapters.map(chapter => {return <li><Link to={`/books/${props.book.id}/chapters/${chapter.id}`}>{chapter.title}</Link></li>})}
    </div>
  )
}
