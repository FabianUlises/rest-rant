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
    res.status(206).render('places/show');
});
router.put('/:id', (req, res) => {
    res.status(206).send('Update single place');
});
router.get('/:id/edit', (req, res) => {
    res.status(206).render('places/edit');
});
router.delete('/:id', (req, res) => {
    res.status(206).send('delete stub page');
});
router.post('/:id/rant', (req, res) => {
    res.status(206).send('create a review');
});
router.delete('/:id/rant/:rantId', (req, res) => {
    res.status(206).send('delete a review');
});

module.exports = router;