// const databaseUrl = "https://lit-everglades-59361.herokuapp.com/api/v1/"
const databaseUrl = 'http://localhost:3000/api/v1'

export function logIn(usercreds){
  const jwtToken = fetch(`${databaseUrl}login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(usercreds)
  }).then(response => {
    return response.json()
  }).then(jwtTokenFromPayload => {
    sessionStorage.setItem('jwt', jwtTokenFromPayload.jwt)
    sessionStorage.setItem('currentUserId', jwtTokenFromPayload.currentUserId)
    sessionStorage.setItem('currentUserName', jwtTokenFromPayload.currentUserName)
    return jwtTokenFromPayload
  })

  return {type: 'LOG_IN_SUCCESS', payload: jwtToken}
}



export function signUp(usercreds){
  const jwtToken = fetch(`${databaseUrl}users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({user: usercreds})
  }).then(response => {
    return response.json()
  }).then(jwtTokenFromPayload => {
    sessionStorage.setItem('jwt', jwtTokenFromPayload.jwt)
    sessionStorage.setItem('currentUserId', jwtTokenFromPayload.currentUserId)
    return jwtTokenFromPayload
  })

  return {type: 'SIGN_UP_SUCCESS', payload: jwtToken}
}
