import {browserHistory} from 'react-router'


export default function sessionsReducer(state=[], action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      if (sessionStorage.jwt == "undefined") {
        browserHistory.push('/login')
      } else {
        browserHistory.push('/books')
      }
    case 'SIGN_UP_SUCCESS':
      if (sessionStorage.jwt == "undefined") {
        browserHistory.push('/signup')
      } else {
        browserHistory.push('/books')
      }
    default:
    return state
  }
}
