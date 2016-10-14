const databaseUrl = "https://lit-everglades-59361.herokuapp.com/api/v1/"
// const databaseUrl = 'http://localhost:3000/api/v1'

export function fetchSnippetVotes(){
  const snippetVotes = fetch(`${databaseUrl}user_snippets`, {
    headers: {"Authorization": `Bearer ${sessionStorage.jwt}`}
  }).then(response => {
    return response.json()
  }).then(snippetVotesPayload => {
    return snippetVotesPayload
  })
  return {
    type: 'FETCH_SNIPPET_VOTES',
    payload: snippetVotes
  }
}

export function voteSnippet(newVote){
  const snippetVoteFromAPI = fetch(`${databaseUrl}snippet_vote`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify
    ({data: newVote})
  }).then(response => {
    return response.json();
  }).then(newVotePayload => {
    return newVotePayload
  })

  return {type: 'SNIPPET_VOTE', payload: snippetVoteFromAPI }
}
