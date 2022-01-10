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
        const id = myLibrary.indexOf(book)
        bookCard.setAttribute('id', id)

        const readStatus = document.createElement('button')
        readStatus.classList.add('read-status')
        readStatus.textContent = 'Already read ✓'

        
        if (!book.read) {
            readStatus.textContent = 'Not read yet ✕'
            readStatus.classList.replace('read-status', 'not-read-status')
        }     

        if (!book.pages) {
            book.pages = '??'
        }

        bookCard.classList.add('book-card')
        bookCard.innerHTML = `<button>X</button>
            <p>${book.title}</p>
            <div>(${book.author})</div>
            <div>${book.pages} pages</div>`

        bookCard.appendChild(readStatus)
        fullLibrary.appendChild(bookCard)

        readStatus.addEventListener('click', () => {
            book.read = !book.read
            displayBooks()
        })  
        
        const deleteButton = bookCard.querySelector('button')
        deleteButton.classList.add('delete-button')

        deleteButton.addEventListener('click', () => {
            const modal = document.querySelector('.modal')
            modal.style.display = 'flex'
            modal.setAttribute('book', id)
        })

    }) 
}

function clearInput() {
    document.querySelectorAll('input').forEach(i => i.value = '')
    document.getElementById('read-input').checked = false
}


const modal = document.querySelector('.modal')
const modalYes = document.querySelector('.yes-button')
const modalNo = document.querySelector('.no-button')

modalYes.addEventListener('click', () => {
    const id = parseInt(modal.getAttribute('book'))
    myLibrary.find(book => myLibrary.indexOf(book) === id)
    myLibrary.splice(id, 1)
    displayBooks()

    modal.setAttribute('book', '')
    modal.style.display = 'none'
})

modalNo.addEventListener('click', () => {
    modal.style.display = 'none'
})