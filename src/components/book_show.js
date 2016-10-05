import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function BookShow(props){
  return (
    <div className='col-sm-8 col-md-8 col-lg-8' >
      <div id="book-show-container" className="panel panel-default">
        <div className="panel-body">
          <h2>Book Title</h2>
          <Link to={`/books/${props.book.id}/chapters`}>{props.book.title}</Link>
          <h4>Book Description</h4>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Books</div>
            <ul id="chapter-scroll-list-group" className="list-group">
              {props.book.chapters.map((chapter) =>
                <li className="list-group-item">
                  <h4 className="list-group-item-heading">{chapter.title}</h4>
                  <p className="list-group-item-text">...</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  if (state.books.length > 0) {
    const book = state.books.find((book) => {return book.id == ownProps.params.id})
    return {book: book}
  } else {
    return {book: {title: '', description: '', chapters: [{title: ''}]}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(BookShow);
