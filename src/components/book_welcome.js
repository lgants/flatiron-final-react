import React from 'react';
import {Link} from 'react-router';

export default function BookWelcome(props){

  var body = {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
  }

  var background = {
    background: 'url(http://www.cipherapps.com/wp-content/uploads/2013/10/iStock_000018278455Medium.jpg)',
    backgroundSize: "cover",
    position: "fixed",
    top: "50",
    right: "0",
    bottom: "0",
    left: "0",
  };


  var layer = {
    backgroundColor: "black",
    opacity: "0.4",
    position: "fixed",
    top: "50",
    right: "0",
    bottom: "0",
    left: "0",
  }

  var welcome = {
    position: "relative",
    color: "white",
    textAlign: "center",
    margin: "auto"
  }

  return (
    <div>
      <div style={background}>
        <div style={layer} />
        <div style={welcome}>
          <h1>Welcome to CollaborWrite!</h1>
          <h3>A social book writing platform.</h3><br/><br/>
          <p>Find a book you're into and add a snippet! Vote on other people's contributions and be a part of creating a book!</p>
          <Link to={'/login'}><h3>Click here to Login!</h3></Link>
        </div>
      </div>
    </div>
  )
}
