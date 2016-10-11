import React from 'react';
import {Link} from 'react-router';


export default function ChapterList(props){
  return (
    <div className="col-lg-4 col-md-4 col-sm-4">
      <div id="book-list-container" className="panel panel-default">
        <div className="panel-body">
          <h3>{props.book.title}</h3>
          <Link to={`/books/${props.book.id}`}>Back</Link>
          <Link to={`/books/${props.book.id}/chapters/new`} className="btn btn-default btn-block">Add a chapter!</Link>
          <br />
          <div className="panel panel-default">
            <div className="panel-heading">Chapters</div>
            <ul id="book-scroll-list-group" className="list-group">
              {props.book.chapters.map((chapter) =>
                <li className="list-group-item" key={chapter.id}>
                  <Link to={`/books/${props.book.id}/chapters/${chapter.id}`}>
                    <h4 className="list-group-item-heading">{chapter.title}</h4>
                    <p className="list-group-item-text">{chapter.description.length > 40 ? `${chapter.description.slice(0, 37)}...` : `${chapter.description}`}</p>
                  </Link>
                </li>
              )}
            </ul>


          </div>
        </div>
      </div>
    </div>
  )
}
