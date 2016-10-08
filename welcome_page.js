

import React from 'react';

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
    opacity: "0.5",
    position: "fixed",
    top: "50",
    right: "0",
    bottom: "0",
    left: "0",
  }

  var welcome = {
    opacity: "1",
    textAlign: "center",
    margin: "auto",
    width: "50%",
  }

  return (
    <div style={background}>
      <div style={layer}>
        <div style={welcome}>
          <h1>WELCOME</h1>
        </div>
      </div>
    </div>
  )
}
