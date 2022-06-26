const router = require('express').Router();
const places = require('../models/places');

router.get('/', (req, res) => {
    res.status(206).render('places/index', { places });
});
router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body);
    res.redirect('/places');
  });
router.get('/new', (req, res) => {
    res.status(206).render('places/new');
});


router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    console.log(id);
    if(isNaN(id)) {
        res.render('error404');
    } else if (!places[id]){
        res.render('error404');
    } else {
        res.status(206).render('places/show', { place: places[id], id });
    }
});



router.put('/:id', (req, res) => {
    res.status(206).send('Update single place');
});
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    if(isNaN(id)) {
        res.render('error404');
    } else if (!places[id]) {
        res.render('error404');
    } else {
        places.splice(id, 1)
        res.status(206).redirect('/places'); 
    }
});
router.post('/:id/rant', (req, res) => {
    res.status(206).send('create a review');
});
router.delete('/:id/rant/:rantId', (req, res) => {
    res.status(206).send('delete a review');
});

module.exports = router;