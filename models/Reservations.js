const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
  event: {
    type: String,
    trim: true,
    required: 'What are you reserving it for?'
  },
  reserved_by: {
    type: String,
    trim: true,
    required: 'Who is reserving the room?'
  },
  reserved_on: {
    type: Date
  },
  details: {
    type: String
  },
  num_guests: {
    type: Number
  },
  added: {
    type: Date,
    default: Date.now
  },
  approved: {
    type: Boolean,
    default: false
  }
});

const Reservations = mongoose.model('Reservations', ReservationsSchema);

module.exports = Reservations;
