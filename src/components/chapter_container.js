import React, { Component } from 'react';
import ChapterList from './chapter_list'
import {connect} from 'react-redux';
import {Link} from 'react-router';

const ChapterContainer = function(props){
  debugger;
  return (
    <div className='col-md-12'>
        <ChapterList book={props.book} />
        {props.children}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  debugger;
 if (state.books.length > 0) {
   const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
   debugger;
   return {book: book}
 } else {
   return {book: {title: '', genre: '', description: '', users: '', chapters: [{id: '', title: '', description: '', snippets: [{content: '', approved: false}]}]}}
 }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ChapterContainer);
