export default function snippetVotesReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_SNIPPET_VOTES':
    return action.payload

    case 'SNIPPET_VOTE':
      const snippetVote = state.find((snippet) => snippet.snippetId == action.payload.user_snippet.snippet_id)
      const copySnippetState = [...state]
      const snippetIndex = copySnippetState.indexOf(snippetVote)
      copySnippetState.splice(snippetIndex, 1)
      const snippetData = {snippetId: action.payload.user_snippet.snippet_id, total: action.payload.vote_total}
      copySnippetState.push(snippetData)
      return copySnippetState
      // indicate that the user has voted up or down

    default:
      return state;
  }
}
