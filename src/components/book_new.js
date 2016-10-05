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
      <div>
        <form onSubmit={this.newBookHandler}>
          <h2>What's Your Book?</h2>
          <input placeholder="title" ref='title' /><br/>
          <input placeholder="genre" ref='genre' /><br/>
          <input placeholder="description" ref='description' /><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(BookNew);
