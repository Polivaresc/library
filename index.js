let myLibrary = ['the hobbit', 'lord of the rings']

function Book() {

}

function addBookToLibrary() {
    const addBookButton = document.querySelector('#add-book')
    addBookButton.addEventListener('click', () => {
        const userInput = document.querySelector('#user-input').value
        myLibrary.push(userInput)

        clearInput()
    })
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div')
        bookDiv.innerText = book

        document.querySelector('#my-library').appendChild(bookDiv)
    }) 
}

function clearInput() {
    document.getElementById('user-input').value = ''
}

addBookToLibrary()
displayBooks()