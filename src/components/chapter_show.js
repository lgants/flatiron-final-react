import React, { Component } from 'react';

export default function ChapterShow(props){
  return (
    <div className='col-md-6' >
        This is the chapter show!

        {props.children}
    </div>
  )
}
