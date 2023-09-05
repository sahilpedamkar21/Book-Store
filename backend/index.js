import express from  "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import {Book} from './models/bookmodel.js';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function(request, response){
    console.log(request);
    
    return response.status(234).send("mern stack");
});


app.use('/books', bookRoute);


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("app connected to database");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port number ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });