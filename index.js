// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
//  Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
const db = require('./models')
// Root route / Home
app.get('/', (req, res) => {
    res.status(200).render('Home');
});

app.get('/places', (req, res) => {
    // db.Place.find()
    //     .then((places) => {
    res.render('places/Index')
        // })
        // .catch(err => {
        //     console.log(err)
        //     res.render('error404')
        // })
})

app.listen(process.env.PORT);