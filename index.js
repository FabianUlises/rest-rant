// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
//  Express settings
app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
// // Controllers and routes
// app.use('/places', require('./routes/places'));
// Root route / Home
app.get('/', (req, res) => {
    res.status(200).render('Home');
});
// Catch all error
app.get('*', (req, res) => {    
    res.status(404).render('error404');
});
// Server on
app.listen(process.env.PORT);