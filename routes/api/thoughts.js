const router = require('express').Router();
const {
  getAllthoughts,
  getthoughtsById,
  createthoughts,
  updatethoughts,
  deletethoughts
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllthoughts)
  .get(getthoughtsById)
  .post(createthoughts);

// /api/thoughts/:id
router
  .route('/:id')
  .put(updatethoughts)
  .delete(deletethoughts);

module.exports = router;