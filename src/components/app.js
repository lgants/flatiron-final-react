import React, { Component } from 'react';

import NavBar from './nav_bar'
import BookContainer from './book_container'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="NavBar" url="/" />
        {/*<BookContainer url="/books"/>*/}
        {this.props.children}
      </div>
    );
  }
}
