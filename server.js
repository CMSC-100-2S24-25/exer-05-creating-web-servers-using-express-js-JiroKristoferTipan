import express from 'express';

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

app.get(`/find-by-isbn-author`)

app.get(`find-by-author`)

app.post(`/add-book`, (req, res) => {
    console.log(`hi 2`)
    console.log(req.body);
    if (req.hasOwnProperty(`BookName`) && req.hasOwnProperty(`ISBN`) && req.hasOwnProperty(`Author`) && req.hasOwnProperty(`YearPublished`)){
        var bookinfo = req.BookName+`,`+req.ISBN+`,`+req.Author+`,`+req.YearPublished+`\n`;
        appendFileSync("books.txt", bookinfo);
    }
    res.send(saved);
})