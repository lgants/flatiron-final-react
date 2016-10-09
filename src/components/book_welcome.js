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
    position: "relative",
    backgroundColor: "black",
    opacity: "0.4",
    position: "fixed",
    top: "50",
    right: "0",
    bottom: "0",
    left: "0",
  }

  var welcome = {
    position: "absolute",
    fontFamily: "Montserrat",
    transform: "translateY(-50%)",
    color: "white",
    textShadow: "2px 2px gray",
    textAlign: "center",
    paddingRight: "250px",
    paddingLeft: "250px",
    top: "50%"
  }

  var introLeadIn = {
    fontStyle: "bold",
    fontSize: "60px",
  }

  var introHeading = {
    fontStyle: "italic",
    fontSize: "40px"
  }

  var introParagraph = {
    fontSize: "20px"
  }

  return (
    <div>
      <div style={background}>
        <div style={layer} />
        <div style={welcome}>
          <div style={introLeadIn}>Welcome to CollaborWrite!</div>
          <div style={introHeading}>A social book writing platform.</div><br/><br/>
          <div style={introParagraph}>Find a book you're into and add a snippet!
            Vote on other people's contributions and be a part of creating a book!</div><br/>
          <Link className="btn btn-success" style={introParagraph} to={'/login'}>Click here to Login!</Link>
        </div>
      </div>
    </div>
  )
}
