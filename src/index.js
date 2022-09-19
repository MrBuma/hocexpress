const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const app = express();

//template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
console.log(__dirname);

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.render('home');
});


app.listen(port, (req, res)=>{
    console.log(` Server is running at port ${port}`);
})