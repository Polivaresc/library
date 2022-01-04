let myLibrary = []

function Book() {

}

function addBookToLibrary() {
    const addBookButton = document.querySelector('#add-book')
    addBookButton.addEventListener('click', () => {
        const userInput = document.querySelector('#user-input').value
        myLibrary.push(userInput)

        document.getElementById('user-input').value = ''
    })
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div')
        bookDiv.innerText = book

        const library = document.querySelector('#my-library')
        library.appendChild(bookDiv)
    }) 
}

addBookToLibrary()
displayBooks()