const { Frined, User } = require('../models');

const friendController = {
  // // add friend to user
  // addFriend({ params, body }, res) {
  //   console.log(params);
  //   Frined.create(body)
  //     .then(({ _id }) => {
  //       return User.findOneAndUpdate(
  //         { _id: params.userId },
  //         { $push: { friends: _id } },
  //         { new: true }
  //       );
  //     })
  //     .then(dbUserData => {
  //       console.log(dbUserData);
  //       if (!dbUserData) {
  //         res.status(404).json({ message: 'No user found with this id!' });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch(err => res.json(err));
  // },

  // add reply to frined
  

  // // remove friend
  // removeComment({ params }, res) {
  //   Frined.findOneAndDelete({ _id: params.friendtId })
  //     .then(deletedFriend => {
  //       if (!deletedFriend) {
  //         return res.status(404).json({ message: 'No friend with this id!' });
  //       }
  //       return User.findOneAndUpdate(
  //         { _id: params.userId },
  //         { $pull: { friends: params.friendId } },
  //         { new: true }
  //       );
  //     })
  //     .then(dbUserData => {
  //       if (!dbUserData) {
  //         res.status(404).json({ message: 'No user found with this id!' });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch(err => res.json(err));
  // },
  // remove reply
  
};

module.exports = friendController;
