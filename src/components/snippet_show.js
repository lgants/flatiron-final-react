import React, { Component } from 'react';
import {connect} from 'react-redux';

const SnippetShow = function(props){

  return (
    <div className='col-md-6' >
      {props.snippet.content}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  if (state.books.length > 0) {
    const snippet = ownProps.chapter.snippets.find((snippet) => {return snippet.id == ownProps.params.snippetId})
    return {snippet: snippet};
  } else {
    return {snippet: {content: '', approved: false,}};
  }
}

export default connect(mapStateToProps)(SnippetShow)
