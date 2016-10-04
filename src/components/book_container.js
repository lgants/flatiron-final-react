import React, { Component } from 'react';
import BookList from './book_list'

export default function BookContainer(props){
  return (
    <div className='col-md-12'>
        This is the container!
        <BookList/>
        {props.children}
    </div>
  )
}
