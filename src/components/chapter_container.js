import React from 'react';
import {connect} from 'react-redux';
import ChapterList from './chapter_list'
import ChapterShow from './chapter_show'




class ChapterContainer extends React.Component{


  render(){
    const childrenWithProps = React.Children.map(this.props.children,
 (child) => React.cloneElement(child, {
   book: this.props.book
    })
  );

    return (
      <div className='col-md-12'>
          <ChapterList book={this.props.book} />
          <div>{childrenWithProps}</div>
      </div>
    );
  }
}


  function mapStateToProps(state, ownProps) {
   if (state.books.length > 0) {
     const book = state.books.find((book) => {return book.id == ownProps.params.bookId})
     return {book: book}
   } else {
     return {book: {title: '', genre: '', description: '', users: '', chapters: [{id: '', title: '', description: '', snippets: [{content: '', approved: false}]}]}}
   }
  }


const componentCreator = connect(mapStateToProps)
export default componentCreator(ChapterContainer);
