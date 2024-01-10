const addBookBtn = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit-button");
const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const isReadForm = document.querySelector("#isRead");

const myLibrary = [];

addBookBtn.addEventListener("click", function () {
    dialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
    dialog.close();
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    myLibrary.push(new Book(titleForm.value.toString(), authorForm.value.toString(), pagesForm.value, isReadForm.checked));
    dialog.close();
})




function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToLibrary() {
    // do stuff here
}


const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
const dailyHabits = new Book("Daily Habits", "John Smith", 400, false);

