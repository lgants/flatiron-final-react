import React from 'react';
import SnippetList from './snippet_list'
import {connect} from 'react-redux';



class SnippetContainer extends React.Component{

  render(){
    const childrenWithProps = React.Children.map(this.props.children,
 (child) => React.cloneElement(child, {
   book: this.props.book,
   chapter: this.props.chapter
    })
  );

    return (
      <div className='col-md-12'>
          <SnippetList book={this.props.book} chapter={this.props.chapter} />
          <div>{childrenWithProps}</div>
      </div>
    )
  }
}


  function mapStateToProps(state, ownProps) {
   if (state.books.length > 0) {
     const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
     const chapter = book.find((chapter) => {return chapter.id == ownProps.params.chapterId})
     return {
       book: book,
       chapter: chapter
     }
   } else {
     return {book: {title: '', genre: '', description: '', users: '', chapters: [{id: '', title: '', description: '', snippets: [{content: '', approved: false}]}]}}
   }
  }


const componentCreator = connect(mapStateToProps)
export default componentCreator(SnippetContainer);
