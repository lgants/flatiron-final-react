
export default function votesReducer(state=[], action) {
  switch (action.type) {
    case 'CHAPTER_VOTE':
      const chapterVote = state.find((chapter) => chapter.chapterId == action.payload.user_chapter.chapter_id)
      const copyState = [...state]
      const index = copyState.indexOf(chapterVote)
      copyState.splice(index, 1)
      const data = {chapterId: action.payload.user_chapter.chapter_id, vote_total: action.payload.vote_total}
      copyState.push(data)
      debugger
      
      return copyState

      // indicate that the user has voted up or down

    default:
      return state;
  }
}
