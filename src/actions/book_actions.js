export function fetchBooks(){

  const books = fetch('http://localhost:3000/api/v1/books').then(response => {
    return response.json()
  }).then(booksPayload => {
    return booksPayload
  })

  return {
    type: 'FETCH_BOOKS',
    payload: books
  }

}
