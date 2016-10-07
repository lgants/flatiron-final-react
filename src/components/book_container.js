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
          <BookList books={this.props.books}/>
          {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  debugger;
  if (state.books.length > 0) {
      return {books: state.books}
    } else {
      debugger
      return {books: [{title: '', description: '', chapters: [{title: ''}]}]}
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}




const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(BookContainer);
