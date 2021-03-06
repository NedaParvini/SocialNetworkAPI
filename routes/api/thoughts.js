const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controller/thoughts-controller');

//Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

//Set up GET one, PUT and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

//POST route for reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

//DELETE route for reaction
router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction)

module.exports = router; 