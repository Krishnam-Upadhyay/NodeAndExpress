//imprtaing express package
const express = require('express');
const app = express();


const morgan = require( "morgan");
const movieRouter = require('./Routes/moviesRoutes');

//creating middlware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('tiny'));
}

//applying middleware
app.use(express.json());
app.use(express.static('./Public'));


//route Handler Functions

app.use('/api/v1/movies',movieRouter);
//Listening on the port

module.exports = app;