const addBookBtn = document.querySelector("#add-book");

const bookList = document.querySelector(".book-list");

const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector("#close");
const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const isReadForm = document.querySelector("#isRead");
const submitBtn = document.querySelector("#submit-button");

const myLibrary = [];

addBookBtn.addEventListener("click", function () {
    dialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
    dialog.close();
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    myLibrary.push(new Book(titleForm.value, authorForm.value, pagesForm.value, isReadForm.checked));
    dialog.close();
    displayBooks();
})

function displayBooks () {
    myLibrary.forEach(function (book) {
        if(book["isRead"] == true) {
            isRead = "Read";
        } else {
            isRead = "Not Read";
        }
        bookList.innerHTML +=  `<div class="book-card">
                                    <div class="big-text">Title</div>
                                    <div>${book["title"]}</div>
                                    <div class="big-text">Author</div>
                                    <div>${book["author"]}</div>
                                    <div class="big-text">Number of Pages</div>
                                    <div>${book["pages"]}</div>
                                    <button id="book-read">${isRead}</button>
                                    <button id="remove-book">Remove</button>
                                </div>`
    })
}


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.isRead = isRead;
}



