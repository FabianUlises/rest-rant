const db = require('../models')
exports.getAllPlaces = async (req, res) => {
    try {
        const places = await db.Place.find();
        res.render('places/index', { places })
    } catch (err) {
        res.render('error404')
    }
}
exports.addPlace = async (req, res) => {
    try {
        if(req.body.pic === '') {req.body.pic = undefined}
        if(req.body.city === '') {req.body.city = undefined}
        if(req.body.state === '') {req.body.state = undefined}
        await db.Place.create(req.body);
            res.redirect('/places')
    } catch (err) {
        if(err && err.name == 'ValidationError') {
            let message = 'Validation Error'
            for(let el in err.errors) {
            message += `${el} was ${err.errors[el].value}`
            message += `${err.errors[el].message}`
            }
            console.log('Validation error message', message)
            res.render('places/new', { message })
        } else {
            res.render('error404')
        }
    }
}
exports.getPlace = async (req, res) => {
    try {
        const place = await db.Place.findById(req.params.id).populate('comments')
        res.render('places/show', { place })
    } catch (err) {
        res.render('error404')
    }
}
exports.updatePlace = (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
}
exports.deletePlace = (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        // console.log('err', err)
        res.render('error404')
    })
}
exports.updatePlaceView = (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
}

exports.addComment = (req, res) => {
    req.body.rant = req.body.rant ? true : false
    // res.send('GET /places/:id/rant stub')
    db.Place.findById(req.params.id)
        .then(place => {
        db.Comment.create(req.body)
            .then(comment => {
            place.comments.push(comment.id)
            place.save()
                .then(() => {
                    res.redirect(`/places/${req.params.id}`)
                })
            })
            .catch (err => {
                res.render('error404');
            })
        })
}
exports.deleteComment = (req, res) => {
    db.Comment.findByIdAndDelete(req.params.rantId)
        .then(deleteComment => {
        res.redirect('/places')
        })
        .catch(err => {
        res.render('error404')
        })
}
