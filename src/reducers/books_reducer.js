export default function booksReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload;
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      const bookToDelete = state.find((book) => book.id == action.payload.id)
      const stateForDelete = [...state]
      const indexOfDelete = stateForDelete.indexOf(bookToDelete)
      debugger
      stateForDelete.splice(indexOfDelete, 1);
      return stateForDelete
    case 'ADD_CHAPTER':
      const book = state.find((book) => book.id == action.payload.book_id)
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
