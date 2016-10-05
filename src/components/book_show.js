import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function BookShow(props){
  return (
    <div className='col-md-6' >
        <Link to={`/books/${props.book.id}/chapters`}>
          {props.book.title}</Link>
        <br />
        {props.book.chapters.map((chapter) =>
          <div>{chapter.title}</div>)
        }
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  if (state.books.length > 0) {
    const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
    return {book: book}
  } else {
    return {book: {title: '', description: '', chapters: [{title: ''}]}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(BookShow);
