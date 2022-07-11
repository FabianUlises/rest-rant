const db = require('./models');
// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
//  Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// // Controllers and routes
// app.use('/places', require('./routes/places'));
// Root route / Home
app.get('/', (req, res) => {
    res.status(200).render('Home');
});
// app.get('/places', async (req, res) => {
//     res.send('hello')
//     // try {
//     //     const places = await db.Place.find();
//     //     res.status(200).render('places/index', { places });
//     // } catch (err) {
//     //     res.status(404).render('error404');
//     // }
// })
// // Catch all error
// app.get('*', (req, res) => {    
//     res.status(404).render('error404');
// });
// Server on
app.listen(process.env.PORT);