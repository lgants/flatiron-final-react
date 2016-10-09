import {browserHistory} from 'react-router'


export default function sessionReducer(state=[], action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      if (sessionStorage.jwt == "undefined") {
        browserHistory.push('/login')
      } else {
        browserHistory.push('/books')
      }
    default:
    return state
  }
}
