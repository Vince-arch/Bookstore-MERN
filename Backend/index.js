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