let myLibrary = []

function Book() {

}

function addBookToLibrary() {
    const addBookButton = document.querySelector('#add-book')
    addBookButton.addEventListener('click', () => {
        const userInput = document.querySelector('#user-input').value
        myLibrary.push(userInput)

        displayBooks()
        clearInput()
    })
}

function displayBooks() {
    let fullLibrary = document.querySelector('#my-library')
    fullLibrary.innerHTML = ''

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div')
        bookDiv.innerText = book

        fullLibrary.appendChild(bookDiv)
    }) 
}

function clearInput() {
    document.getElementById('user-input').value = ''
}

addBookToLibrary()
