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
    res.json(message[0].messageContainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

//Route POST api/messages
//@desc send message
//access public
router.post(
  '/:username',
  [check('message', 'Type in something').not().isEmpty()],
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
        return res.status(400).json({ errors: [{ msg: 'User not found' }] });
      }

      //Search for message with the user's id
      let messageData = await Messages.findOne({ user: user.id });

      messageData.messageContainer.unshift({ message });
      await messageData.save();

      res.json(messageData.messageContainer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//Route GET api/messages/:msg_id
//@desc Retrieve single message
//access private
router.get('/:msg_id', auth, async (req, res) => {
  try {
    let message = await Message.findOne({ user: req.user.id });

    if (!message) {
      return res.status(404).json({ errors: [{ msg: 'Message not found' }] });
    }

    message = message.messageContainer.filter(
      (msg) => msg.id === req.params.msg_id
    );
    res.json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
