export default function booksReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload;
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'ADD_CHAPTER':
      const book = state.find((book) => book.id == action.payload.book_id)
      // remove book from copy state
      const copyState = [...state]
      const index = copyState.indexOf(book)
      copyState.splice(index, 1);
      const copyBook = JSON.parse(JSON.stringify(book))
      copyBook.chapters.push(action.payload)
      return copyState.push(copyBook)
    case 'ADD_SNIPPET':
      debugger
    default:
      return state;
  }
};
