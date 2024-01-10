function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.info = function () {
        if(isRead === "yes") {
            this.isRead = "already read";
        }
        else {
            this.isRead = "not read yet";
        }
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
    }
 }


 const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, "yes");
 console.log(theHobbit.info());

 console.log(Object.getPrototypeOf(theHobbit));
 console.log(Object.getPrototypeOf(theHobbit) === Book.prototype); 