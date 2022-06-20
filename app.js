require('dotenv').config();
const express = require('express');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./routes/places'));




app.get('/', (req, res) => {
    res.status(206).render('Home');
});
app.get('/places', (req, res) => {
    res.status(206).send('places index page');
});
app.post('/places', (req, res) => {
    res.status(206).send('Create a new place');
});
app.get('/places/new', (req, res) => {
    res.status(206).send('Form page to add new place');
});
app.get('/places/:id', (req, res) => {
    res.status(206).send('Details about single place');
});
app.put('/places/:id', (req, res) => {
    res.status(206).send('Update single place');
});
app.get('/places/:id/edit', (req, res) => {
    res.status(206).send('page to edit single place');
});
app.delete('/places/:id', (req, res) => {
    res.status(206).send('delete stub page');
});
app.post('/places/:id/rant', (req, res) => {
    res.status(206).send('create a review');
});
app.delete('/places/:id/rant/:rantId', (req, res) => {
    res.status(206).send('delete a review');
});
app.get('*', (req, res) => {    
    res.status(404).send('Page not found');
});

app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});