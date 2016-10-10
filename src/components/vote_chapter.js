import React from 'react';
import * as actions from '../actions/vote_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

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
      <div className="col-md-1">
        <button onClick={this.voteHandlerUp}><span className="glyphicon glyphicon-triangle-top col-md-12"></span></button>
        <span className="col-md-12">{this.props.chapterVotes.total}</span>
        <button onClick={this.voteHandlerDown}><span className="glyphicon glyphicon-triangle-bottom col-md-12"></span></button>
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
