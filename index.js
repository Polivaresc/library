let myLibrary = []

const addBookForm = document.querySelector('form')

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary()
    displayBooks()
    clearInput()
    addBookForm.style.display = 'none'
})

const showForm = document.querySelector('#show-form')
showForm.addEventListener('click', () => {
    addBookForm.style.display = 'grid'
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read
}

function addBookToLibrary() {
    const newTitle = document.querySelector('#title-input').value
    const newAuthor = document.querySelector('#author-input').value
    const newPages = document.querySelector('#pages-input').value
    const newRead = document.querySelector('#read-input').checked


    const NewBook = new Book(newTitle, newAuthor, newPages, newRead)

    myLibrary.push(NewBook)
}

function displayBooks() {
    let fullLibrary = document.querySelector('#my-library')
    fullLibrary.innerHTML = ''

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div')
        let readMessage = 'Already read'

        if (!book.read) {
            readMessage = 'Not read yet'
        }

        if (!book.pages) {
            book.pages = '?'
        }

        bookDiv.classList.add('book-cart')
        bookDiv.innerHTML = `<div>${book.title}</div>
            <div>(${book.author})</div>
            <div>${book.pages} pages</div>
            <div>${readMessage}</div>`

        fullLibrary.appendChild(bookDiv)
    }) 
}

function clearInput() {
    document.querySelectorAll('input').forEach(i => i.value = '')
    document.getElementById('read-input').checked = false
}