const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  event_date: {
    type: Date
  },
  participants: {
    type: String
  },
  added: {
    type: Date,
    default: Date.now
  }
});

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
