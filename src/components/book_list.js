import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


function BookList(props){
  return (
    <div className="col-md-4">
      <button role="button" className="btn btn-secondary btn-block" type="button">
        <Link to="/books/new">Add a book :)</Link>
      </button>
      <ul className="list-group">
        {props.books.map(book =>
          <li className="list-group-item" key={book.id}>
          <Link to={`/books/${book.id}`}>
          {book.title}
          </Link>
          </li>

        )}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(BookList);
