import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookList from './book_list';
import * as actions from '../actions/book_actions';
import { bindActionCreators } from 'redux'

class BookContainer extends React.Component {
  componentWillMount() {
    if (this.props.books[0].title == "") {
      this.props.actions.fetchBooks();
    }
  }
  render () {
    return (
      <div className='col-md-12'>
          <BookList books={this.props.books} linkHead={this.props.location.pathname.split("/")[1]}/>
          {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  if (state.books.length > 0) {
    if (ownProps.location.pathname == "/library"){
      const completeBooks = state.books.filter((book) => {
        return book.complete == true;
      });
      return {books: completeBooks}
    } else {
      const incompleteBooks = state.books.filter((book) => {
        return book.complete == false;
      });
      return {books: incompleteBooks}
    }
  } else {
    return {books: [{title: '', description: '', chapters: [{title: ''}]}]}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}




const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(BookContainer);
