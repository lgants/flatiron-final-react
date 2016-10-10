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
  }

  render() {
    return (
      <nav className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <Link to={"/books"} className='navbar-brand'> Collabowrite </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to={"/books"} className='navbar-item'> Pending </Link></li>
            <li><Link to={"/library"} className='navbar-item'> Complete </Link></li>
            <li>
              {sessionStorage.getItem('jwt') ? <a href="/login" onClick={this.logOut}>Log Out</a> : <Link to={"/login"} className='navbar-item'> Log In </Link>}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
