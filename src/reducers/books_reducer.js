import { browserHistory } from 'react-router';

export default function booksReducer(state=[], action) {
  switch ( action.type ) {
  case 'FETCH_BOOKS':
      return action.payload;

  case 'ADD_BOOK':
    return [action.payload, ...state]

  case 'DELETE_BOOK':
    const bookToDelete = state.find((book) => book.id == action.payload.id)
    const stateForDelete = [...state]
    const indexOfDelete = stateForDelete.indexOf(bookToDelete)
    stateForDelete.splice(indexOfDelete, 1);
    return stateForDelete


  case 'ADD_CHAPTER':
    const book = state.find((book) => book.id == action.payload.book_id)
    const copyState = [...state]
    const index = copyState.indexOf(book)
    copyState.splice(index, 1);
    const copyBook = JSON.parse(JSON.stringify(book))
    copyBook.chapters.push(action.payload)
    copyState.push(copyBook)
    return copyState

  case 'APPROVE_CHAPTER':
    const stateForApproveChapter = [...state]
    const chaptersBookToApprove = state.find((book) => book.chapters.find((chapter) => chapter.id == action.payload))
    const chaptersBookToApproveIndex = stateForApproveChapter.indexOf(chaptersBookToApprove)
    const chapterToApprove = stateForApproveChapter[chaptersBookToApproveIndex].chapters.find((chapter) => chapter.id == action.payload)
    chapterToApprove.snippets.map((snippet)=>snippet.approved = true)
    chapterToApprove.approved = true
    return stateForApproveChapter

  case 'ADD_SNIPPET':
    const snippetBook = state.find((book) => book.chapters.find((chapter) => chapter.id == action.payload.chapter_id))
    const snippetCopyState = [...state]
    const bookIndex = snippetCopyState.indexOf(snippetBook)
    snippetCopyState.splice(bookIndex, 1)
    const copySnippetBook = JSON.parse(JSON.stringify(snippetBook))
    const snippetChapter = copySnippetBook.chapters.find((chapter) => chapter.id == action.payload.chapter_id)
    const chapterIndex = copySnippetBook.chapters.indexOf(snippetChapter)
    copySnippetBook.chapters.splice(chapterIndex, 1)
    const copySnippetChapter = JSON.parse(JSON.stringify(snippetChapter))
    copySnippetChapter.snippets.push(action.payload)
    copySnippetBook.chapters.push(copySnippetChapter)
    snippetCopyState.push(copySnippetBook)
    return snippetCopyState

  case 'APPROVE_SNIPPET':
    const stateForApproveSnippet = [...state]
    const snippetsBookToApprove = state.find((book) => book.chapters.find((chapter) => chapter.snippets.find((snippet) => snippet.id == action.payload)))
    const snippetsBookToApproveIndex = stateForApproveSnippet.indexOf(snippetsBookToApprove)
    const snippetsChapterToApprove = stateForApproveSnippet[snippetsBookToApproveIndex].chapters.find((chapter) => chapter.snippets.find((snippet) => snippet.id == action.payload))
    const snippetsChapterToApproveIndex = stateForApproveSnippet[snippetsBookToApproveIndex].chapters.indexOf(snippetsChapterToApprove)
    const snippetToApprove = stateForApproveSnippet[snippetsBookToApproveIndex].chapters[snippetsChapterToApproveIndex].snippets.find((snippet) => snippet.id == action.payload)
    snippetToApprove.approved = true
    return stateForApproveSnippet

  case 'DELETE_SNIPPET':
    const snippetsBookToDelete = state.find((book) => book.chapters.find((chapter) => chapter.snippets.find((snippet) => snippet.id == action.payload)))
    const stateForDeleteSnippet = [...state]
    const snippetsBookToDeleteIndex = stateForDeleteSnippet.indexOf(snippetsBookToDelete)
    const snippetsChapterToDelete = stateForDeleteSnippet[snippetsBookToDeleteIndex].chapters.find((chapter) => chapter.snippets.find((snippet) => snippet.id == action.payload))
    const snippetsChapterToDeleteIndex = stateForDeleteSnippet[snippetsBookToDeleteIndex].chapters.indexOf(snippetsChapterToDelete)
    const snippetToDelete = stateForDeleteSnippet[snippetsBookToDeleteIndex].chapters[snippetsChapterToDeleteIndex].snippets.find((snippet) => snippet.id == action.payload)
    const snippetToDeleteIndex = stateForDeleteSnippet[snippetsBookToDeleteIndex].chapters[snippetsChapterToDeleteIndex].snippets.indexOf(snippetToDelete)
    stateForDeleteSnippet[snippetsBookToDeleteIndex].chapters[snippetsChapterToDeleteIndex].snippets.splice(snippetToDeleteIndex, 1);
    return stateForDeleteSnippet

  default:
    return state;
  }
};
