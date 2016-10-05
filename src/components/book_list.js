import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


function BookList(props){
  return (
    <div className="col-lg-4 col-md-4 col-sm-4">
      <div id="book-list-container" className="panel panel-default">
        <div className="panel-body">
          <Link to="/books/new">
            <button role="button" className="btn btn-default btn-block" type="button">Add a book :)</button>
          </Link>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Books</div>
            <ul id="book-scroll-list-group" className="list-group">
              {props.books.map((book) =>
                <li className="list-group-item" key={book.id}>
                  <Link to={`/books/${book.id}`}>
                    <h4 className="list-group-item-heading">{book.title}</h4>
                    <p className="list-group-item-text">...</p>
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

function mapStateToProps(state){
  return {
    books: state.books
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(BookList);
