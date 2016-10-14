// const databaseUrl = "https://lit-everglades-59361.herokuapp.com/api/v1/"
const databaseUrl = 'localhost:3000/api/v1'

export function fetchChapterVotes(){
  const chapterVotes = fetch(`${databaseUrl}user_chapters`, {
    headers: {"Authorization": `Bearer ${sessionStorage.jwt}`}
  }).then(response => {
    return response.json()
  }).then(chapterVotesPayload => {
    return chapterVotesPayload
  })
  return {
    type: 'FETCH_CHAPTER_VOTES',
    payload: chapterVotes
  }
}

export function voteChapter(newVote){
  const voteFromAPI = fetch(`${databaseUrl}chapter_vote`, {
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

  return {type: 'CHAPTER_VOTE', payload: voteFromAPI }
}
