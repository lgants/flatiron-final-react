import React from 'react';
import * as actions from '../actions/user_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class LogIn  extends React.Component {
  constructor(props){
    super(props)
    this.logInHandler = this.logInHandler.bind(this)
  }

  logInHandler(event){
    event.preventDefault()
    this.props.actions.logIn({email: this.refs.email.value, password: this.refs.password.value})
  }


  render(){
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="log-in-form" className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={this.logInHandler}>
              <h2>Log In</h2>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" ref='email' />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" ref='password' />
              </div>
              <button type="submit" className="btn btn-default btn-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
  )}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(LogIn)
