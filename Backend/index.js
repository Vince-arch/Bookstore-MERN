import express from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app = express();

//middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//option 1:Allow All origins with default of cors(*)
app.use(cors());
//option 2: Allow custom Origins
/*app.use(
    CORS({
        origin:'http://localhost:3000',
        methods:['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders:['content-type'],
    })
);*/

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