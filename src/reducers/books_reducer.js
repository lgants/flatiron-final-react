export default function booksReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload;
    case 'ADD_BOOK':
      return [...state, action.payload]
    default:
      return state;
  }
};
