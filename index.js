// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
//  Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
const db = require('./models')

const getAllPlaces = (req, res) => {
    db.Place.find()
        .then(places => {
            res.render('places/index', { places });
        })
        .catch(err) {
            console.log(err)
        }
};
const addPlace = async (req, res) => {
    try {
        if(req.body.pic === '') {req.body.pic = undefined};
        if(req.body.city === '') {req.body.city = undefined};
        if(req.body.state === '') {req.body.state = undefined};
        await db.Place.create(req.body);
            res.status(201).redirect('/places');
    } catch (err) {
        if(err && err.name == 'ValidationError') {
            let message = 'Validation Error';
            for(let el in err.errors) {
            message += `${el} was ${err.errors[el].value}`
            message += `${err.errors[el].message}`
            };
            res.render('places/new', { message })
        } else {
            res.status(404).render('error404');
        }
    }
};
const getPlace = async (req, res) => {
    try {
        const place = await db.Place.findById(req.params.id).populate('comments');
        res.status(200).render('places/show', { place });
    } catch (err) {
        res.status(404).render('error404');
    }
};
const updatePlaceView = async (req, res) => {
    try {
        const place = await db.Place.findById(req.params.id);
        res.status(202).render('places/edit', { place });
    } catch (err) {
        res.status(404).render('error404');
    }
};
const updatePlace = async (req, res) => {
    try {
        await db.Place.findByIdAndUpdate(req.params.id, req.body);
        res.status(202).redirect(`/places/${req.params.id}`);
    } catch(err) {
        res.status(404).render('error404');
    }
};
const deletePlace = async(req, res) => {
    try {
        await db.Place.findByIdAndDelete(req.params.id);
        res.status(204).redirect('/places');
    } catch (err) {
        res.status(404).render('error404');
    }
};
const addComment = async (req, res) => {
    try {
        req.body.rant = req.body.rant ? true : false;
        const place = await db.Place.findById(req.params.id);
        const comment = await db.Comment.create(req.body);
        place.comments.push(comment.id);
        await place.save();
        res.status(201).redirect(`/places/${req.params.id}`);
    } catch (err) {
        res.status(404).render('error404');
    }
};
const deleteComment = async (req, res) => {
    try {
        await db.Comment.findByIdAndDelete(req.params.rantId);
        res.status(204).redirect('/places');

    } catch (err) {
        res.status(404).render('error404');
    }
};

// Root route / Home
app.get('/', (req, res) => {
    res.status(200).render('Home');
});

// app.get('/places', getAllPlaces);
// app.post('/places', addPlace);
// app.get('/places/new', (req, res) => {
//     res.render('places/new')
// });
// app.get('/places/:id', getPlace);
// app.get('/places/:id/edit', updatePlaceView);
// app.put('/places/:id', updatePlace);
// app.delete('/places/:id', deletePlace)
// app.post('/places/:id/comment', addComment);
// app.delete('/places/:id/comment/:rantId', deleteComment)
app.listen(process.env.PORT);