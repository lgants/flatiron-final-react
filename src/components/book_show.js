import React, { Component } from 'react';

export default function BookShow(props){
  return (
    <div className='col-md-6' >
        This is the book show!

        {props.children}
    </div>
  )
}
