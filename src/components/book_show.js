import React, { Component } from 'react';
import * as bookActions from '../actions/book_actions'
import * as chapterVoteActions from '../actions/chapter_vote_actions'
import * as chapterActions from '../actions/chapter_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import VoteChapter from './vote_chapter';

class BookShow extends React.Component {
  constructor(props) {
    super(props)
    this.deleteBookHandler = this.deleteBookHandler.bind(this)
    this.approveChapterHandler = this.approveChapterHandler.bind(this)
  }

  deleteBookHandler(event) {
    const deleteBook = this.props.book
    this.props.actions.bookActions.deleteBook(deleteBook)
    browserHistory.push('/books')
  }

  approveChapterHandler(event) {
    const approveChapterId = event.target.id
    this.props.actions.chapterActions.approveChapter(approveChapterId)
    browserHistory.push(`/books/${this.props.book.id}`)
  }

  render() {
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.description}</h4>
            <br />
            <br />
            <div className="panel panel-default">
              <div className="panel-heading">Chapters</div>
              <ul id="chapter-scroll-list-group" className="list-group">
                {this.props.book.chapters.map((chapter) =>
                  <li className="list-group-item">
                    <div className="row">
                      {/*YOU CAN'T VOTE ON APPROVED CHAPTERS*/}
                      <div className="col-lg-2 col-md-2 col-sm-2 vote-container">
                      {(chapter.approved) ?
                        <span className="fa fa-check"/> :
                        <VoteChapter chapter={chapter} book={this.props.book}/>
                      }
                      </div>
                      <Link to={`/books/${this.props.book.id}/chapters/${chapter.id}`}>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                          <h4 className="list-group-item-heading">{chapter.title}</h4>
                          <p className="list-group-item-text">{chapter.description.length > 120 ? `${chapter.description.slice(0, 120)}...` : `${chapter.description}`}</p>
                        </div>
                      </Link>
                      <div className="col-lg-10 col-md-10 col-sm-10" >
                        {((sessionStorage.currentUserId == this.props.book.author_id) && (chapter.approved == false)) ? <button className="btn btn-success" id={chapter.id} onClick={this.approveChapterHandler}>Approve Chapter</button> : null}
                      </div>
                    </div>
                  </li>
                )}
              </ul>
              <Link to={`/books/${this.props.book.id}/chapters/new`}  className="btn btn-default btn-block">Add a Chapter!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.books.length > 0 && state.books.find((book) => {return book.id == ownProps.params.bookId})) {
    const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
    return {book: book}
  } else {
    return {book: {title: '', description: '', chapters: [{title: '', description: ''}]}}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      bookActions: bindActionCreators(bookActions, dispatch),
      chapterVoteActions: bindActionCreators(chapterVoteActions, dispatch),
      chapterActions: bindActionCreators(chapterActions,dispatch)
      }
    }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(BookShow);
