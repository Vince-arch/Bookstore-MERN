import express from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

//middleware for parsing request body
app.use(express.json());

//homepage
app.get("/", (req,res)=>{
 res.send('Welcome to the Homepage')
});


//route to save a new book
app.post('/books', async(req,res)=>{
try {
    // Checks if required fields are present in the request body
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear   
    ) {
        return res.status(400).send({
            message: 'send all required fields: title,author, publishYear'});
    }

   const newBook ={
        title: req.body.title,
        author: req.body.author,
        publishYear:req.body.publishYear
    }

    const book = await Book.create(newBook);

    return res.status(201).send(book);
} catch (error) {
  console.log(error.message);
  res.status  
}
})

//route to get all books from database
app.get('/books', async(req, res)=>{
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data:books
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

//Route to update a book
app.put('/books:id', async(req, res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear   
          ) {
              return res.status(400).send({
                  message: 'send all required fields: title,author, publishYear'});
          }

          const {id} = request.params;

          const result = await Book.findByIdAndUpdate(id, req.body);

          if (!result){
            return res.status(404).json({message:'Book not found'});
          }
          return res.status(200).send({message: 'Book updated successfully'})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to Database')
    app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error)
});