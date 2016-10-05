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

export function addChapter(newChapterFromForm) {
  const newChapterFromApi = fetch('http://localhost:3000/api/v1/chapters', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({chapter: newChapterFromForm})
  }).then(response => {
    return response.json()
  }).then(newChapterPayload => {
    return newChapterPayload
  })

  return {type: 'ADD_CHAPTER', payload: newChapterFromApi}
}
