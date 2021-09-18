const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  messageContainer: [
    {
      message: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        default: Date.now,
      },
    },
  ],
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = Message = mongoose.model('messages', MessageSchema);
