import express from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app = express();

//middleware for parsing request body
app.use(express.json());

//homepage
app.get("/", (req,res)=>{
 res.send('Welcome to the Homepage')
});

//middleware
app.use('/books', booksRoute)


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