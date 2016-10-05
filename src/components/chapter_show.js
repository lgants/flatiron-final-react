import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


const ChapterShow = function(props){
  return (
    <div className='col-md-6' >
        {props.chapter.snippets.map((snippet) =>
          <span>
            {snippet.content}<br/><br/>
          </span>)}
        <Link to={`/books/${props.book.id}/chapters/${props.chapter.id}/snippets/new`}>Add a Snippet!</Link>
    </div>
  );
};


function mapStateToProps(state, ownProps) {
  if (state.books.length > 0) {
    const chapter = ownProps.book.chapters.find((chapter) => {return chapter.id == ownProps.params.chapterId})
    return {chapter: chapter};
  } else {
    return {chapter: {title: '', description: '', snippets: {content: '', approved: false}}}
  }
}


export default connect(mapStateToProps)(ChapterShow)
