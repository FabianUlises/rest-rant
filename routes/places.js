const router = require('express').Router()
const place_controller = require('./../controllers/place_controller')
// Root routes
router.route('/')
  .get(place_controller.getAllPlaces)
  .post(place_controller.addPlace)
// /new route
router.get('/new', (req, res) => {
  res.render('places/new')
})
// Id routes
router.route('/:id')
  .get(place_controller.getPlace)
  .put(place_controller.updatePlace)
  .delete(place_controller.deletePlace)
router.get('/:id/edit', place_controller.updatePlaceView)
// Comments routes
router.post('/:id/comment', place_controller.addComment)
router.delete('/:id/comment/:rantId', place_controller.deleteComment)
module.exports = router