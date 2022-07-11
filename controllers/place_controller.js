const db = require('../models')
exports.getAllPlaces = (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
  }
exports.addPlace = (req, res) => {
    if(req.body.pic === '') {req.body.pic = undefined}
    if(req.body.city === '') {req.body.city = undefined}
    if(req.body.state === '') {req.body.state = undefined}
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
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

        })
}
exports.getPlace = (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
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
