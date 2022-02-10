const router = require('express').Router();
const {
  addFriend,
  removeFriend,
  addReply,
  removeReply
} = require('../../controllers/friend-controller');

// /api/friends/<UserId>
// router.route('/:userId').post(addFriend);

// /api/friends/<userId>/<friendId>

router
  .route('/:userId/:friendId')
  .put(addReply)
  // .delete(removeFriend);

// /api/friends/<userId>/<friendId>/<replyId>
router.route('/:userId/:friendId/:replyId').delete(removeReply);

module.exports = router;
