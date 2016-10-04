import React, { Component } from 'react';
import ChapterList from './chapter_list'

export default function ChapterContainer(props){
  return (
    <div className='col-md-12'>
        This is the Chapter Container!
        <ChapterList />
        {props.children}
    </div>
  )
}
