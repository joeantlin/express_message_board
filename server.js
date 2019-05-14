const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('express-flash');
const session = require('express-session');

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Routes
require('./routes')(app)

app.listen(8000, () => {
    console.log("listening on port 8000");
});