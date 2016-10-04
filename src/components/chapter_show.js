import React, { Component } from 'react';
import {connect} from 'react-redux'

const ChapterShow = function(props){
  debugger;
  return (
    <div className='col-md-6' >
        This is the chapter show!
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  // debugger;
}

export default connect(mapStateToProps)(ChapterShow)
