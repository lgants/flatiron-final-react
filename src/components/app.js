import React, { Component } from 'react';
import NavBar from './nav_bar'
import BookContainer from './book_container'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="NavBar" url="/" />
        {this.props.children}
      </div>
    );
  }
}
