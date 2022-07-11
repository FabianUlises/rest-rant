// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
//  Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Root route / Home
app.get('/', (req, res) => {
    res.status(200).render('Home');
});
app.get('/places', (req, res) => {
    res.status(200).render('/places/Index')
})
app.listen(process.env.PORT);