export function fetchBooks(){
  const books = fetch('http://localhost:3000/api/v1/books', {
    headers: {"Authorization": `Bearer ${sessionStorage.jwt}`}
  }).then(response => {
    return response.json()
  }).then(booksPayload => {
    return booksPayload
  })

  return {
    type: 'FETCH_BOOKS',
    payload: books
  }
}

export function addBook(newBookFromForm) {
  const newBookFromApi = fetch('http://localhost:3000/api/v1/books', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({book: newBookFromForm})
  }).then(response => {
    return response.json()
  }).then(newBookPayload => {
    return newBookPayload
  })

  return {type: 'ADD_BOOK', payload: newBookFromApi}
}

export function deleteBook(deleteBook) {
  const bookFromApi = fetch(`http://localhost:3000/api/v1/books/${deleteBook.id}`, {
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

  return {type: 'DELETE_BOOK', payload: deleteBook}
}
