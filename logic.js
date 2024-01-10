const addBookBtn = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector("#close");

addBookBtn.addEventListener("click", function () {
    dialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
    dialog.close();
})

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.info = function () {
        if(isRead === true) {
            this.isRead = "already read";
        }
        else {
            this.isRead = "not read yet";
        }
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
    }
}


function addBookToLibrary() {
    // do stuff here
}


const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
const dailyHabits = new Book("Daily Habits", "John Smith", 400, false);

