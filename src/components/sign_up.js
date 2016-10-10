import React from 'react';
import * as actions from '../actions/user_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class SignUp  extends React.Component {
  constructor(props){
    super(props)
    this.signUpHandler = this.signUpHandler.bind(this)
  }

  signUpHandler(event){
    event.preventDefault()
    this.props.actions.signUp({email: this.refs.email.value, username: this.refs.username.value, password: this.refs.password.value})
  }

  render(){
    return (
      <div className='col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-md-offset-3 col-lg-offset-3'>
        <div id="log-in-form" className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={this.signUpHandler}>
              <h2>Sign Up</h2>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" ref='email' />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input type="username" className="form-control" ref='username' />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" ref='password' />
              </div>
              <button type="submit" className="btn btn-default btn-block">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
  )}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(SignUp)
