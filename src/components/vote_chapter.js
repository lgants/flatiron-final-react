import React from 'react';
import * as actions from '../actions/chapter_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {Icon} from 'react-fa'


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
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button onClick={this.voteHandlerUp} className="btn btn-md btn-default custom-btn-md"><Icon name="caret-up" /></button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <center><span className="col-md-12">1</span></center>
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


// function mapStateToProps(state, ownProps) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(VoteChapter);
