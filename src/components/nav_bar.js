import React from 'react';
import {Link} from 'react-router';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: !!sessionStorage.getItem('jwt')}
    this.logOut = this.logOut.bind(this)
  }

  logOut(event) {
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('currentUserName')
  }

  render() {

    var navBarColor = {
      backgroundColor: "#add8e6",
    }

    return (
      <nav className='navbar navbar-dark' style={navBarColor}>
        <div className='navbar-header'>
          <Link to={"/books"} className='navbar-brand'> Collabowrite </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><Link to={"/books"} className='navbar-item'> Pending </Link></li>
            <li><Link to={"/library"} className='navbar-item'> Complete </Link></li>
            <li><Link to={"/mybooks"} className='navbar-item'> My Books </Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {sessionStorage.getItem('currentUserName') ? <p className="navbar-text">Hi {sessionStorage.getItem('currentUserName')}!</p> : null }
            </li>
            <li>
              {sessionStorage.getItem('jwt') ? <Link to={"/login"} onClick={this.logOut}>Log Out</Link> : <Link to={"/login"} className='navbar-item'> Log In </Link>}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
