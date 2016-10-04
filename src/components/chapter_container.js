import React, { Component } from 'react';
import ChapterList from './chapter_list'

export default function ChapterContainer(props){
  return (
    <div>
        This is the Chapter Container!
        <ChapterList />
        {props.children}
    </div>
  )
}
