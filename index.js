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
        const bookCard = document.createElement('div')
        bookCard.setAttribute('id', myLibrary.indexOf(book))

        let readMessage = 'Already read'

        if (!book.read) {
            readMessage = 'Not read yet'
        }

        if (!book.pages) {
            book.pages = '?'
        }

        bookCard.classList.add('book-card')
        bookCard.innerHTML = `<button>X</button>
            <p>${book.title}</p>
            <div>(${book.author})</div>
            <div>${book.pages} pages</div>
            <div>${readMessage}</div>`
        
        fullLibrary.appendChild(bookCard)
        
        const deleteButton = bookCard.querySelector('button')
        deleteButton.classList.add('delete-button')

        deleteButton.addEventListener('click', () => {
            const id = parseInt(bookCard.getAttribute('id'))
            myLibrary.find(book => myLibrary.indexOf(book) === id)
            myLibrary.splice(id, 1)
            displayBooks()
        })

    }) 
}

function clearInput() {
    document.querySelectorAll('input').forEach(i => i.value = '')
    document.getElementById('read-input').checked = false
}
