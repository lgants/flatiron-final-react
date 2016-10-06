
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

export function addSnippet(newSnippetFromForm, bookId){
  const newSnippetFromAPI = fetch('http://localhost:3000/api/v1/snippets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({snippet: newSnippetFromForm})
  }).then(response => {
    return response.json();
  }).then(newSnippetPayload => {
    return newSnippetPayload
  })

  return {type: 'ADD_SNIPPET', payload: newSnippetFromAPI }
}
