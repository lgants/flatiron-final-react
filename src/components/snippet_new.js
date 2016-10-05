import React, { Component } from 'react';
import * as actions from '../actions/chapter_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class SnippetNew extends React.Component {
  constructor(props) {
    super(props)
    this.newSnippetHandler = this.newSnippetHandler.bind(this)
  }

  newSnippetHandler(event) {
    debugger
    event.preventDefault()
    const newSnippet = {content: this.refs.content.value, approved: false, chapter_id: this.props.params.chapterId }
    const bookId = this.props.params.bookId
    this.props.actions.addSnippet(newSnippet, bookId)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newSnippetHandler}>
          <h2>What's Your Snippet?</h2>
          <input placeholder="content" ref='content' /><br/>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SnippetNew);
