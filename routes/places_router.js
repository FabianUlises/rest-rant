const db = require('../models');
const router = require('express').Router()

router.get('/places', (req, res) => {
  res.status(200).render('places/Index')
})
module.exports = router