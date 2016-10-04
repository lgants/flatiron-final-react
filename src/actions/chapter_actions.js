export function fetchChapters(){

  const chapters = fetch('http://localhost:3000/api/v1/chapters').then(response => {
    return response.json()
  }).then(chaptersPayload => {
    return chaptersPayload
  })

  return {
    type: 'FETCH_CHAPTERS',
    payload: chapters
  }

}
