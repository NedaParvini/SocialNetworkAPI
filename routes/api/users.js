const router = require('express').Router();

const {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllusers)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);;
  

module.exports = router;