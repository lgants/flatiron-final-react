import React from 'react';
import * as actions from '../actions/vote_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {Icon} from 'react-fa'


class VoteChapter extends React.Component {

  constructor(props){
    super(props)
    this.state = {total: this.props.chapterVotes.total}
    this.voteHandlerUp = this.voteHandlerUp.bind(this)
    this.voteHandlerDown = this.voteHandlerDown.bind(this)
  }

  componentWillMount(nextProps, nextState){
    this.props.actions.fetchChapterVotes()
  }

  voteHandlerUp(event){
    event.preventDefault()
    this.props.actions.voteChapter({user_id: sessionStorage.currentUserId, chapter_id: this.props.chapter.id, vote_choice: "1"})
  }

  voteHandlerDown(event){
    debugger
    event.preventDefault()
    this.props.actions.voteChapter({user_id: sessionStorage.currentUserId, chapter_id: this.props.chapter.id, vote_choice: "-1"})
  }


  render(){
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button onClick={this.voteHandlerUp} className="btn btn-md btn-default custom-btn-md"><Icon name="caret-up" /></button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <center><span className="col-md-12">{this.props.chapterVotes.total}</span></center>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button onClick={this.voteHandlerDown} className="btn btn-md btn-default custom-btn-md"><Icon name="caret-down" /></button>
          </div>
        </div>
    </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  if (state.votes.length > 0 && state.votes.find((chapter)=> chapter.chapterId == ownProps.chapter.id)) {
    const chapterVotes = state.votes.find((chapter)=> chapter.chapterId == ownProps.chapter.id)
    return {chapterVotes: chapterVotes}
  } else {
    return {chapterVotes: {chapterId:"", total: 0}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(VoteChapter);
