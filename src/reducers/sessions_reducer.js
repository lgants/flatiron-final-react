import {browserHistory} from 'react-router'


export default function sessionsReducer(state=[], action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
    browserHistory.push('/books')
    default:
    return state
  }
}
