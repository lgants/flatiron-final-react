import React from 'react';
import * as actions from '../actions/vote_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class VoteChapter extends React.Component {
  constructor(props){
    super(props)
    this.voteHandlerUp = this.voteHandlerUp.bind(this)
    this.voteHandlerDown = this.voteHandlerDown.bind(this)
  }

  voteHandlerUp(event){
    event.preventDefault()
    this.props.actions.voteChapter({user_id: sessionStorage.currentUserId, chapter_id: this.props.chapter.id, vote_choice: "1"})
  }

  voteHandlerDown(event){
    event.preventDefault()
    this.props.actions.voteChapter({user_id: sessionStorage.currentUserId, chapter_id: this.props.chapter.id, vote_choice: "-1"})
  }


  render(){
    return (
      <div className="col-md-1">
        <button onClick={this.voteHandlerUp}><span className="glyphicon glyphicon-triangle-top col-md-12"></span></button>
        <span className="col-md-12">{this.props.chapterVotes.vote_total}</span>
        <button onClick={this.voteHandlerDown}><span className="glyphicon glyphicon-triangle-bottom col-md-12"></span></button>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  if (state.votes.length > 0) {
    const chapterVotes = state.votes.find((chapter)=> chapter.chapterId == ownProps.chapter.id)
    return {chapterVotes: chapterVotes}
  } else {
    return {chapterVotes: {chapterId:"", vote_total: 0}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(VoteChapter);
