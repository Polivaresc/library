let myLibrary = []


// function Book(title) {
//     this.title = title
//     this.author = author 
//     this.pages = pages 

//     isRead = function () {
//         if (read) {
//             return 'already read'
//         } else {
//             return 'not read yet'
//         }
//     }
// }

// const Book = {
//     title: this.title,
//     author: this.author,
//     pages: this.pages,
//     isRead: function() {
//                 if (read) {
//                     return 'already read'
//                 } else {
//                     return 'not read yet'
//                 }
//             }
// }


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
