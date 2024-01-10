const addBookBtn = document.querySelector("#add-book");
const container = document.querySelector(".main-container");

const bookList = document.querySelector(".book-list");

const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector("#close");
const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const isReadForm = document.querySelector("#isRead");
const submitBtn = document.querySelector("#submit-button");
const form = document.querySelector("form");

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.isRead = isRead;
}


addBookBtn.addEventListener("click", function () {
    dialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
    dialog.close();
});

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    myLibrary.push(new Book(titleForm.value, authorForm.value, pagesForm.value, isReadForm.checked));
    dialog.close();
    form.reset();
    displayBooks();
});


container.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-book")) {
        idBook = e.target.id;
        const element = document.getElementById(`${idBook}`);
        element.remove();
    }
    if (e.target.classList.contains("book-read")) {
        element = document.getElementById(`${e.target.id}`);
        if (e.target.id === "book-is-read") {
            element.id = "book-not-read";
            element.textContent = "Not Read";
        } else {
            element.id = "book-is-read";
            element.textContent = "Read";
        }
    }
})
    

function displayBooks () {
    const book = myLibrary[myLibrary.length - 1];
    const bookPlacement = myLibrary.length - 1;
    if(book["isRead"] == true) {
        isRead = "Read";
        id = "book-is-read";
    } else {
        isRead = "Not Read";
        id = "book-not-read";
    }
    bookList.innerHTML +=  `<div class="book-card" id="${bookPlacement}">
                                <div class="big-text">Title</div>
                                <div>${book["title"]}</div>
                                <div class="big-text">Author</div>
                                <div>${book["author"]}</div>
                                <div class="big-text">Pages</div>
                                <div>${book["pages"]}</div>
                                <button class="book-read" id=${id}>${isRead}</button>
                                <button class="remove-book" id=${bookPlacement}>Remove</button>
                            </div>`;
}





