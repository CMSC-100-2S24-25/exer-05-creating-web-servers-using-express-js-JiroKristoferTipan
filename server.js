import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const saved = {
    success: true
}
const unsaved = {
    success: false
}

//listener
app.listen(3000, () => { console.log('Server started at port 3000')} );

app.get(`/add-book`, (req, res) => {
    console.log(`used get book`);
    res.send(`hi`);
})

app.get(`/find-by-isbn-author`, (req, res) => {
    const text = fs.readFileSync("books.txt", "utf-8");
    text.split("\n");
    for (let i = 0; i < text.length; i++){
        if (text[i].includes(req.query.isbn) && text[i].includes(req.query.author)){
            res.send(text[i]);
        }
    }
})

app.get(`find-by-author`, (req, res) => {
    const text = fs.readFileSync("books.txt", "utf-8");
    text.split("\n");
    for (let i = 0; i < text.length; i++){
        if (text[i].includes(req.query.author)){
            res.send(text[i]);
        }
    }
})

app.post(`/add-book`, (req, res) => {
    console.log(`hi 2`)
    console.log(req.body);
    if (req.hasOwnProperty(`BookName`) && req.hasOwnProperty(`ISBN`) && req.hasOwnProperty(`Author`) && req.hasOwnProperty(`YearPublished`)){
        var bookinfo = req.BookName+`,`+req.ISBN+`,`+req.Author+`,`+req.YearPublished+`\n`;
        appendFileSync("books.txt", bookinfo);
    }
    res.send(saved);
})