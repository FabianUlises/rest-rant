const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(206).send('Places route')
})

module.exports = router;