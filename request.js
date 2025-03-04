import needle from 'needle';

const saved = {
    success: true
}
const unsaved = {
    success: false
}

const book1 = {
    BookName: `harry Potter and the Philosopher's Stone`,
    ISBN: `978-0-7475-3269-9`,
    Author: `J.K. Rowling`,
    YearPublished: `1998`
};

needle.post(
    `http://localhost:3000/add-book`,
    book1,
    (err, res) => {
        console.log(book1); 
    }
);