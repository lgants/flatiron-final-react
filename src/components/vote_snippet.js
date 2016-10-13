import React from 'react';
import * as actions from '../actions/snippet_vote_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {Icon} from 'react-fa'


class VoteSnippet extends React.Component {

  constructor(props){
    super(props)
    this.voteHandlerUp = this.voteHandlerUp.bind(this)
    this.voteHandlerDown = this.voteHandlerDown.bind(this)
  }

  componentWillMount(nextProps, nextState){
    this.props.actions.fetchSnippetVotes()
  }

  shouldComponentUpdate(nextProps, nextState){
    return (!!nextProps.snippetVotes.snippetId || this.props.chapter.id !== nextProps.chapter.id)
}

  voteHandlerUp(event){
    event.preventDefault()
    this.props.actions.voteSnippet({user_id: sessionStorage.currentUserId, snippet_id: this.props.snippet.id, vote_choice: "1"})
  }

  voteHandlerDown(event){
    event.preventDefault()
    this.props.actions.voteSnippet({user_id: sessionStorage.currentUserId, snippet_id: this.props.snippet.id, vote_choice: "-1"})
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
            <center><span className="col-md-12">{this.props.snippetVotes.total}</span></center>
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
  if (state.snippetVotes.length > 0 && state.snippetVotes.find((snippet)=> snippet.snippetId == ownProps.snippet.id)) {
    const snippetVotes = state.snippetVotes.find((snippet)=> snippet.snippetId == ownProps.snippet.id)
    return {snippetVotes: snippetVotes}
  } else {
    return {snippetVotes: {snippetId:"", total: 0}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(VoteSnippet);
