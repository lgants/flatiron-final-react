import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function BookShow(props){
  return (
    <div className='col-sm-8 col-md-8 col-lg-8' >
      <div id="book-show-container" className="panel panel-default">
        <div className="panel-body">
          <h2>{props.book.title}</h2>
          <h4>{props.book.description}</h4>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Chapters</div>
            <ul id="chapter-scroll-list-group" className="list-group">
              {props.book.chapters.map((chapter) =>
                <li className="list-group-item">
                  <Link to={`/books/${props.book.id}/chapters/${chapter.id}`}>
                    <h4 className="list-group-item-heading">{chapter.title}</h4>
                    <p className="list-group-item-text">{chapter.description.length > 120 ? `${chapter.description.slice(0, 120)}...` : `${chapter.description}`}</p>
                  </Link>
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
    const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
    return {book: book}
  } else {
    return {book: {title: '', description: '', chapters: [{title: ''}]}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(BookShow);
