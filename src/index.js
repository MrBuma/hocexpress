const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const route = require('./routers');
const app = express();
const db = require('./app/config/db');
const methodOverride = require('method-override');
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//template Engine
    app.engine('hbs', engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
// ghi de phuong thuc
app.use(methodOverride('_method'));
// set view engine
app.set('view engine', 'hbs');
            app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
const port = process.env.PORT || 3000;
// connect to database;
db.connect();
// route function 
route(app);


app.listen(port, (req, res) => {
    console.log(` Server is running at port ${port}`);
});
