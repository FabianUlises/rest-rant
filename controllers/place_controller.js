// Model
const db = require('../models');
// Controllers
// Get all places
exports.getAllPlaces = async (req, res) => {
    try {
        // Getting places from db
        const places = await db.Place.find();
        res.status(200).render('places/Index', { places });
    } catch (err) {
        res.status(404).render('error404');
    }
};
// Create a new place
exports.addPlace = async (req, res) => {
    try {
        // If input fields are empty set to undefined
        if (req.body.pic === '') { req.body.pic = undefined; };
        if (req.body.city === '') { req.body.city = undefined; };
        if (req.body.state === '') { req.body.state = undefined; };
        // Creating new place with user input
        await db.Place.create(req.body);
        res.status(201).redirect('/places');
    } catch (err) {
        // Checking for validation errors
        if (err && err.name == 'ValidationError') {
            // Creating error message variable to render to screen
            let message = 'Validation Error';
            // replacing error message value with errors
            for (let el in err.errors) {
                message += `${el} was ${err.errors[el].value}`;
                message += `${err.errors[el].message}`;
            };
            res.status(200).render('places/new', { message });
        } else {
            res.status(404).render('error404');
        }
    }
};
// Get a single place
exports.getPlace = async (req, res) => {
    try {
        // Getting place from db using id params
        const place = await db.Place.findById(req.params.id).populate('comments');
        res.status(200).render('places/show', { place });
    } catch (err) {
        res.status(404).render('error404');
    }
};
// Update a place
exports.updatePlace = async (req, res) => {
    try {
        // Updating db with user input using params id
        await db.Place.findByIdAndUpdate(req.params.id, req.body);
        res.status(202).redirect(`/places/${req.params.id}`);
    } catch (err) {
        res.status(404).render('error404');
    }
};
// Delete a single place
exports.deletePlace = async (req, res) => {
    try {
        // Deleting a place using id from params
        await db.Place.findByIdAndDelete(req.params.id);
        res.status(204).redirect('/places');
    } catch (err) {
        res.status(404).render('error404');
    }
};
// View to update a place
exports.updatePlaceView = async (req, res) => {
    try {
        // Getting place from db using id to pass as props
        const place = await db.Place.findById(req.params.id);
        res.status(202).render('places/edit', { place });
    } catch (err) {
        res.status(404).render('error404');
    }
};
// Create a comment
exports.addComment = async (req, res) => {
    try {
        // Setting value for checkbox
        req.body.rant = req.body.rant ? true : false;
        // Getting place from db using params id
        const place = await db.Place.findById(req.params.id);
        // Creating comment using user input
        const comment = await db.Comment.create(req.body);
        // Pusing the comment that was created to place db
        place.comments.push(comment.id);
        await place.save();
        res.status(201).redirect(`/places/${req.params.id}`);
    } catch (err) {
        res.status(404).render('error404');
    }
};
// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        // Deleting comment using id from params
        await db.Comment.findByIdAndDelete(req.params.rantId);
        res.status(204).redirect('/places');
    } catch (err) {
        res.status(404).render('error404');
    }
};