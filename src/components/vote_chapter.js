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
    this.props.actions.voteUp({email: this.refs.email.value, chapter_id: this.refs.password.value})
    this.props.actions.voteDown({email: this.refs.email.value, chapter_id: this.refs.password.value})
  }

  voteHandlerDown(event){
    event.preventDefault()
    this.props.actions.voteUp({email: this.refs.email.value, chapter: this.refs.password.value})
    this.props.actions.voteDown({email: this.refs.email.value, password: this.refs.password.value})
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


function mapStateToProps(state, ownProps) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(VoteChapter);
