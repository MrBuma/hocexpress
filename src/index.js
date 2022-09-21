const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const route = require('./routers');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
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

const port = process.env.PORT || 3000;


route(app);
// app.get('/', (req, res) =>{
//     res.render('home');
// });
// app.get('/search', (req, res) =>{
//     res.render('search');
// });
// app.post('/search', (req, res) =>{
//     res.render('search');
// });

app.listen(port, (req, res)=>{
    console.log(` Server is running at port ${port}`);
})