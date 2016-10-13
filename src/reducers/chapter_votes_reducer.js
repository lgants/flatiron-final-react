export default function chapterVotesReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_CHAPTER_VOTES':
    return action.payload

    case 'CHAPTER_VOTE':
      const chapterVote = state.find((chapter) => chapter.chapterId == action.payload.user_chapter.chapter_id)
      const copyChapterState = [...state]
      const chapterIndex = copyChapterState.indexOf(chapterVote)
      copyChapterState.splice(chapterIndex, 1)
      const chapterData = {chapterId: action.payload.user_chapter.chapter_id, total: action.payload.vote_total}
      copyChapterState.push(chapterData)
      return copyChapterState

    default:
      return state;
  }
}

//
// export default function votesReducer(state=[], action) {
//   switch (action.type) {
//     case 'CHAPTER_VOTE':
//       const chapterVote = state.find((chapter) => chapter.chapterId == action.payload.user_chapter.chapter_id)
//       const copyState = [...state]
//       const index = copyState.indexOf(chapterVote)
//       copyState.splice(index, 1)
//       const data = {chapterId: action.payload.user_chapter.chapter_id, total: action.payload.vote_total}
//       copyState.push(data)
//       return copyState
//
//       // indicate that the user has voted up or down
//
//     case 'FETCH_CHAPTER_VOTES':
//     return action.payload
//
//
//     default:
//       return state;
//   }
// }
