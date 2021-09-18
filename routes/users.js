const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Messages = require('../models/Messages');

//Route POST api/users
//@desc Register a user
//access public

router.post(
  '/',
  [
    check('userName', 'Put in username').not().isEmpty(),
    check('password', 'Put in password').isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userName, password } = req.body;
    try {
      //Checking if username has already been taken
      let user = await User.findOne({ userName });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Username has been taken' }] });
      }

      //Instantiate new user
      user = new User({
        userName,
        password,
      });

      //Create a message using new user's id
      const message = new Message({
        user: user.id,
      });

      //Hashing password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      await message.save();

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: '1d',
        },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
);

module.exports = router;
