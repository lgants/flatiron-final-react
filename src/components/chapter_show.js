import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


const ChapterShow = function(props){
  return (
    <div className='col-sm-8 col-md-8 col-lg-8' >
      <div id="book-show-container" className="panel panel-default">
        <div className="panel-body">
          <h2>{props.chapter.title}</h2>
          <h4>{props.chapter.description}</h4>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Snippets</div>
            <ul id="chapter-scroll-list-group" className="list-group">
              {props.chapter.snippets.map((snippet) =>
                <li className="list-group-item">
                  <Link to={`/books/${props.book.id}/chapters/${props.chapter.id}/snippets/${snippet.id}`}>
                    <h4 className="list-group-item-heading">{snippet.content}</h4>
                  </Link>
                </li>
              )}
            </ul>
            <Link to={`/books/${props.book.id}/chapters/${props.chapter.id}/snippets/new`}>Add a Snippet!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


function mapStateToProps(state, ownProps) {
  if (state.books.length > 0 && ownProps.book.chapters.length > 0 && !! ownProps.book.chapters[0].id) {
    const chapter = ownProps.book.chapters.find((chapter) => {return chapter.id == ownProps.params.chapterId})
    return {chapter: chapter};
  } else {
    return {chapter: {id: '', title: '', description: '', snippets: [{id: '', content: '', approved: false}]}}
  }
}


export default connect(mapStateToProps)(ChapterShow)
