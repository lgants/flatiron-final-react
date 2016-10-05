import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function BookList(props){
  return (
    <div className='col-md-4'>
      <ul>
        {props.books.map(book => <Link to={`/books/${book.id}`}><li key={book.id}>{book.title}</li></Link>)}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  debugger
  return {
    books: state.books
  }
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(BookList);
