const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/200/300'
    }, {
        name: 'Cidubg Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/200/300'
    }
];
    res.status(206).render('places/index', { places });
});
router.post('/places', (req, res) => {
    res.status(206).send('Create a new place');
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