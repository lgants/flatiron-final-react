import React, { Component } from 'react';
import * as actions from '../actions/chapter_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {browserHistory} from 'react-router'

class SnippetNew extends React.Component {
  constructor(props) {
    super(props)
    this.newSnippetHandler = this.newSnippetHandler.bind(this)
  }

  newSnippetHandler(event) {
    event.preventDefault()
    const newSnippet = {content: this.refs.content.value, approved: false, chapter_id: this.props.params.chapterId, author_id: sessionStorage.currentUserId }
    const bookId = this.props.params.bookId
    this.props.actions.addSnippet(newSnippet)
    browserHistory.push(`/books/${this.props.params.bookId}/chapters/${this.props.params.chapterId}`)
  }

  render() {
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={this.newSnippetHandler}>
              <h2>What's Your Snippet?</h2>
              <div className="form-group">
                <textarea className="form-control" placeholder="content" ref='content' />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
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
export default componentCreator(SnippetNew);
