const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  password: {
    type: String,
    trim: true,
    required: 'Please enter your password'
  },
  chores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chores'
    }
  ],
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservations'
    }
  ],
  announcements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Announcements'
    }
  ],
  groceries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Groceries'
    }
  ],
  // TODO Better way to do internal messaging?
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'messages'
    }
  ]
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
