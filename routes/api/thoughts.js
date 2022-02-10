const router = require('express').Router();
const {
  getAllthoughts,
  getthoughtsById,
  createthoughts,
  updatethoughts,
  deletethoughts,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllthoughts)
  .post(createthoughts);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getthoughtsById)
  .put(updatethoughts)
  .delete(deletethoughts);

router
.route('/:thoughtId')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;