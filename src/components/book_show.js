import React, { Component } from 'react';
import * as actions from '../actions/book_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import VoteChapter from './vote_chapter';

class BookShow extends React.Component {
  constructor(props) {
    super(props)
    this.deleteBookHandler = this.deleteBookHandler.bind(this)
  }

  deleteBookHandler(event) {
    const deleteBook = this.props.book
    this.props.actions.deleteBook(deleteBook)
    browserHistory.push('/books')
  }

  render() {
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.description}</h4>
            <button className="btn btn-default btn-block" onClick={this.deleteBookHandler}>Delete Book </button>
            <br />
            <br />
            <div className="panel panel-default">
              <div className="panel-heading">Chapters</div>
              <ul id="chapter-scroll-list-group" className="list-group">
                {this.props.book.chapters.map((chapter) =>
                  <li className="list-group-item">
                    <div className="row vote-container">
                      <div className="col-md-1">
                        <VoteChapter/>
                      </div>
                      <Link to={`/books/${this.props.book.id}/chapters/${chapter.id}`}>
                        <div className="col-md-11">
                          <h4 className="list-group-item-heading">{chapter.title}</h4>
                          <p className="list-group-item-text">{chapter.description.length > 120 ? `${chapter.description.slice(0, 120)}...` : `${chapter.description}`}</p>
                        </div>
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.books.length > 0) {
    const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
    return {book: book}
  } else {
    return {book: {title: '', description: '', chapters: [{title: '', description: ''}]}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(BookShow);
