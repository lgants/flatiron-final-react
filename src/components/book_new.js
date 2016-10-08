import React, { Component } from 'react';
import * as actions from '../actions/book_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class BookNew extends React.Component {
  constructor(props) {
    super(props)
    this.newBookHandler = this.newBookHandler.bind(this)
  }

  newBookHandler(event) {
    event.preventDefault()
    // how to associate the currentUser to author
    // currentUser?
    const newBook = {title: this.refs.title.value, genre: this.refs.genre.value, description: this.refs.description.value}
    this.props.actions.addBook(newBook)
  }

  render() {
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={this.newBookHandler}>
              <h2>Create New Book</h2>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" placeholder="title" ref='title' />
              </div>
              <div className="form-group">
                <label>Genre:</label>
                <input type="text" className="form-control" placeholder="genre" ref='genre' />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea className="form-control" placeholder="description" ref='description' />
              </div>
              <button type="submit" className="btn btn-default btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(BookNew);
