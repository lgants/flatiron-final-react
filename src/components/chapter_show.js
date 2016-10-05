import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


const ChapterShow = function(props){
  return (
    <div className='col-md-6' >
      Chapter Show
    </div>
  );
};

// how to find chapter from ownProps!
function mapStateToProps(state, ownProps) {
  debugger
  if (state.books.length > 0) {
    const chapter = ownProps.book.chapters.find((chapter) => {return chapter.id === ownProps.params.chapterId})
    return {chapter: chapter};
  } else {
    return {chapter: {title: '', description: '', snippets: {content: '', approved: false}}}
  }
}


export default connect(mapStateToProps)(ChapterShow)
