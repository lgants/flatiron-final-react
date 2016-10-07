import {browserHistory} from 'react-router'


export default function sessionReducer(state=[], action) {
  debugger
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
    sessionStorage.setItem('jwt', action.payload.jwt)
    sessionStorage.setItem('currentUserId', action.payload.currentUserId)
    browserHistory.push('/')
    default:
    return state
  }
}
