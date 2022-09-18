const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');

app.use(morgan('combined'));


const port = process.env.PORT || 3000;

app.use('/', (req, res, next) =>{
    res.send('Hello the world 333');
});

app.listen(port, (req, res,next)=>{
    console.log(` Server is running at port ${port}`);
})