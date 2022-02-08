const router = require('express').Router();
const {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllusers)
  .get(getUserById)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;