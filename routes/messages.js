const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Messages = require('../models/Messages');
const auth = require('../middleware/auth');

//Route GET api/messages
//@desc get message
//access private
router.get('/', auth, async (req, res) => {
  try {
    const message = await Messages.find({ user: req.user.id });
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//Route POST api/messages
//@desc send message
//access public
router.post(
  '/:username',
  [
    check('message', 'Type in something')
      .not()
      .isEmpty()
      .isLength({ min: 3, max: 250 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { message } = req.body;

    try {
      //Verify username
      let user = await User.findOne({ userName: req.params.username });
      if (!user) {
        return res.status(400).json({ msg: 'User not found' });
      }

      //Search for message with the user's id
      let messageData = await Messages.findOne({ user: user.id });

      messageData.messageContainer.unshift({ message });
      await messageData.save();

      res.json(messageData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
);

module.exports = router;
