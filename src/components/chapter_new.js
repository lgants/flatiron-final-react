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
    const newChapter = {title: this.refs.title.value, description: this.refs.description.value }
    this.props.actions.addChapter(newChapter)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newChapterHandler}>
          <h2>What's Your Chapter?</h2>
          <input placeholder="title" ref='title' /><br/>
          <input placeholder="description" ref='description' /><br/>

          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChapterNew);
