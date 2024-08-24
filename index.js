import express from "express";
import {PORT} from "./config.js";
import mongoose from "mongoose";
//import {Book} from "./models/bookModel.js";
import bookRoute from './routes/bookRoutes.js';
import cors from 'cors';

const app  = express();

//Middleware for parsing request body
app.use(express.json());

//Middleare for handling CORS POLICY
//Option 1:Allow all origins with default of cors(*)
app.use(cors());
//Option 2:Allow customers origins 
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN stack');
});

app.use('/books',bookRoute);

mongoose
    .connect(
    "mongodb://localhost:27017/mern",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    });



