import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap'


class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      showModal: false,
      book: {title: '', description: '', chapters: [{title: '', description: '', snippets: [{content: ''}]}]}
    });
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close(){
    this.setState({ showModal: false });
  }

  open(bookToShow){
    debugger
    this.setState({
      showModal: true,
      book: bookToShow
    });
  }

  render () {
    debugger
    return (
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div id="book-list-container" className="panel panel-default">
          <div className="panel-body">
            <Link to="/books/new" className="btn btn-default btn-block">Add a book</Link>
            <br />
            <div className="panel panel-default">
              <div className="panel-heading">Books</div>
              <ul id="book-scroll-list-group" className="list-group">
                {this.props.books.map((book) =>
                  <li className="list-group-item" key={book.id}>


                    { this.props.linkHead == "library" ?

                      <Link onClick={ ()=>this.open(book) }>
                        <h4 className="list-group-item-heading">{book.title}</h4>
                        <p className="list-group-item-text">{book.description.length > 40 ? `${book.description.slice(0, 40)}...` : `${book.description}`}</p>
                      </Link> :

                      <Link to={`/${this.props.linkHead}/${book.id}`}>
                        <h4 className="list-group-item-heading">{book.title}</h4>
                        <p className="list-group-item-text">{book.description.length > 40 ? `${book.description.slice(0, 40)}...` : `${book.description}`}</p>
                      </Link>

                    }

                    <div>
                      <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                          <Modal.Title>{this.state.book.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div>
                            {this.state.book.chapters.map((chapter) =>
                              <div>
                                <h4>{chapter.title}</h4>
                                {chapter.snippets.map((snippet) =>
                                  <p>{snippet.content}</p>
                                )}
                              </div>
                            )}
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={ this.close }>Close</Button>
                        </Modal.Footer>
                      </Modal>
                    </div>



                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const componentCreator = connect(null, null)
export default componentCreator(BookList);
