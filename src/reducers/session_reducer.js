import {browserHistory} from 'react-router'


export default function sessionReducer(state=[], action) {
  debugger
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
    debugger
    browserHistory.push('/books')
    default:
    return state
  }
}
