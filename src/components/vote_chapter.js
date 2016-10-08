import React from 'react';
import * as actions from '../actions/chapter_actions';
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
    debugger
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
        <span className="col-md-12">{this.props.vote}</span>
        <button onClick={this.voteHandlerDown}><span className="glyphicon glyphicon-triangle-bottom col-md-12"></span></button>
      </div>
    )
  }
}


// function mapStateToProps(state, ownProps) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(VoteChapter);
