const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChoresSchema = new Schema({
  chore: {
    type: String,
    trim: true,
    required: 'What needs to be done?'
  },
  assigned: {
    type: String,
    trim: true
  },
  details: {
    type: String
  },
  chore_allowance: {
    type: Number
  },
  due: {
    type: Date
  },
  added: {
    type: Date,
    default: Date.now
  },
  complete: {
    type: Boolean,
    default: false
  }
});

const Chores = mongoose.model('Chores', ChoresSchema);

module.exports = Chores;
