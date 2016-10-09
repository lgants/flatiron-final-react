
export default function votesReducer(state=[], action) {
  switch (action.type) {
    case 'CHAPTER_VOTE':
      // find specific chapter and change vote count
      const data = {chapterId: action.payload.user_chapter.chapter_id, vote_total: action.payload.vote_total}
      return [...state, data]
      // indicate that the user has voted up or down

    default:
      return state;
  }
}
