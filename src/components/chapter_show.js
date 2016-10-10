import React from 'react';
import * as actions from '../actions/chapter_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import VoteChapter from './vote_chapter';

class ChapterShow extends React.Component {
  constructor(props) {
    super(props)
    this.deleteSnippetHandler = this.deleteSnippetHandler.bind(this)
  }

  deleteSnippetHandler(event) {
    const deleteSnippetId = event.target.id
    this.props.actions.deleteSnippet(deleteSnippetId)
    browserHistory.push(`/books/${this.props.book.id}/chapters/${this.props.chapter.id}`)
  }

  approveSnippetHandler(event) {
    const approveSnippetId = event.target.id
    this.props.actions.approveSnippet(approveSnippetId)
    browserHistory.push(`/books/${this.props.book.id}/chapters/${this.props.chapter.id}`)
  }

  render() {

    var notApproved = {
      backgroundColor: "#ffffcc"
    }

    debugger
    return (
      <div className='col-sm-8 col-md-8 col-lg-8' >
        <div id="book-show-container" className="panel panel-default">
          <div className="panel-body">
            <h2>{this.props.chapter.title}</h2>
            <h4>{this.props.chapter.description}</h4>
            <br />
            <div className="panel panel-default">
              <div className="panel-heading">Snippets</div>
              <ul id="chapter-scroll-list-group" className="list-group">
                {this.props.chapter.snippets.map((snippet) =>
                  <li style= {snippet.approved ? null : notApproved } className="list-group-item">
                    {/* THIS LINK IS FOR A SNIPPET SHOW PAGE THAT WE MAY INCLUDE IN NEW VERSIONS
                      <Link to={`/books/${this.props.book.id}/chapters/${this.props.chapter.id}/snippets/${snippet.id}`}>
                    */}
                      <div className="row vote-container">
                        <div className="col-md-1">
                          {/*insert vote tally here*/}
                        </div>
                        <div className="col-md-11">
                          <h4 className="list-group-item-heading">{snippet.content}</h4>
                          {sessionStorage.currentUserId == snippet.author_id ? <button id={snippet.id} onClick={this.deleteSnippetHandler}><span className="fa fa-trash"/></button> : null}
                          <span>  </span>
                          {((sessionStorage.currentUserId == this.props.book.author_id) && (snippet.approved == false)) ? <button id={snippet.id} onClick={this.approveSnippetHandler}>Approve Snippet</button> : null}
                        </div>
                      </div>
                    {/* </Link> */}
                  </li>
                )}
              </ul>
              <Link to={`/books/${this.props.book.id}/chapters/${this.props.chapter.id}/snippets/new`}  className="btn btn-default btn-block">Add a Snippet!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  if (state.books.length > 0 && ownProps.book.chapters.length > 0 && !! ownProps.book.chapters[0].id) {
    const chapter = ownProps.book.chapters.find((chapter) => {return chapter.id == ownProps.params.chapterId})
    return {chapter: chapter};
  } else {
    return {chapter: {id: '', title: '', description: '', snippets: [{id: '', content: '', approved: false}]}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(ChapterShow);
