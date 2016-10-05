export default function booksReducer(state=[], action) {
  switch ( action.type ) {
    case 'ADD_CHAPTER':
      return [...state, action.payload]
    default:
      return state;
  }
};
