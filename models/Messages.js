const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  to_user: {
    type: String,
    trim: true,
    required: 'Who should this go to?'
  },
  message: {
    type: String,
    required: 'What is the message?'
  },
  added: {
    type: Date,
    default: Date.now
  },
  urgent: {
    type: Boolean,
    default: false
  }
});

const Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;
