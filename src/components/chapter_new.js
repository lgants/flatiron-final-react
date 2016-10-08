import React, { Component } from 'react';
import * as actions from '../actions/chapter_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class ChapterNew extends React.Component {
  constructor(props) {
    super(props)
    this.newChapterHandler = this.newChapterHandler.bind(this)
  }

  newChapterHandler(event) {
    event.preventDefault()
    const newChapter = {title: this.refs.title.value, description: this.refs.description.value, book_id: this.props.book.id, author_id: sessionStorage.currentUserId }
    this.props.actions.addChapter(newChapter)
  }

  render() {
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={this.newChapterHandler}>
              <h2>Create New Chapter</h2>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" placeholder="title" ref='title' />
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
    )}







}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChapterNew);
