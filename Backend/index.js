import express from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req,res)=>{
 res.send('Welcome to the Homepage')
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to Database')
})
.catch((error)=>{
    console.log(error)
});