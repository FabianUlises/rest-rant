require('dotenv').config();
const express = require('express');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./routes/places'));




app.get('/', (req, res) => {
    res.status(206).render('Home');
});

app.get('*', (req, res) => {    
    res.status(404).render('error404');
});

app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});