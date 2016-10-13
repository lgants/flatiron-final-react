import React, { Component } from 'react';
import * as bookActions from '../actions/book_actions'
import * as chapterVoteActions from '../actions/chapter_vote_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class FinalBookShow extends React.Component {
  constructor(props) {
    super(props)
    // this.deleteBookHandler = this.deleteBookHandler.bind(this)
  }

  // deleteBookHandler(event) {
  //   const deleteBook = this.props.book
  //   this.props.actions.bookActions.deleteBook(deleteBook)
  //   browserHistory.push('/books')
  // }

  render() {

    return (
        <div className='col-sm-8 col-md-8 col-lg-8' >
          <div id="book-show-container" className="panel panel-default">
            <div className="panel-body">
              <h2>{this.props.book.title}</h2>
              <h4>{this.props.book.description}</h4>
              <br />
              <div>
                {this.props.book.chapters.map((chapter) =>
                  <div>
                    <h4>{chapter.title}</h4>
                    {chapter.snippets.map((snippet) =>
                      <p>{snippet.content}</p>
                    )}
                  </div>
                )}
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
    return {book: {title: '', description: '', chapters: [{title: '', description: '', snippets: [{content: ''}]}]}}
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       bookActions: bindActionCreators(bookActions, dispatch),
//       voteActions: bindActionCreators(voteActions, dispatch)
//       }
//     }
// }

// const componentCreator = connect(mapStateToProps, mapDispatchToProps)
const componentCreator = connect(mapStateToProps)


export default componentCreator(FinalBookShow);
