export function addChapter(newChapterFromForm) {
  const newChapterFromApi = fetch('http://localhost:3000/api/v1/chapters', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({chapter: newChapterFromForm})
  }).then(response => {
    return response.json()
  }).then(newChapterPayload => {
    return newChapterPayload
  })

  return {type: 'ADD_CHAPTER', payload: newChapterFromApi}
}

export function approveChapter(approveChapterId) {
  const chapterFromApi = fetch(`http://localhost:3000/api/v1/chapters/${approveChapterId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
  }).then(response => {
    return response.json()
  }).then(error => {
    return error
  })

  return {type: 'APPROVE_CHAPTER', payload: approveChapterId}
}

export function addSnippet(newSnippetFromForm){
  const newSnippetFromAPI = fetch('http://localhost:3000/api/v1/snippets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({snippet: newSnippetFromForm})
  }).then(response => {
    return response.json();
  }).then(newSnippetPayload => {
    return newSnippetPayload
  })

  return {type: 'ADD_SNIPPET', payload: newSnippetFromAPI }
}

export function deleteSnippet(deleteSnippetId) {
  const snippetFromApi = fetch(`http://localhost:3000/api/v1/snippets/${deleteSnippetId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
  }).then(response => {
    return response.json()
  }).then(error => {
    return error
  })

  return {type: 'DELETE_SNIPPET', payload: deleteSnippetId}
}

export function approveSnippet(approveSnippetId) {
  const snippetFromApi = fetch(`http://localhost:3000/api/v1/snippets/${approveSnippetId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
  }).then(response => {
    return response.json()
  }).then(error => {
    return error
  })

  return {type: 'APPROVE_SNIPPET', payload: approveSnippetId}
}


export function voteChapter(newVote){
  const voteFromAPI = fetch('http://localhost:3000/api/v1/chapter_vote', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({data: newVote})
  }).then(response => {
    return response.json();
  }).then(newVotePayload => {
    return newVotePayload
  })

  return {type: 'CHAPTER_VOTE', payload: voteFromAPI }
}
