const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnnouncementsSchema = new Schema({
  added: {
    type: Date,
    default: Date.now
  }
});

const Announcements = mongoose.model('Announcements', AnnouncementsSchema);

module.exports = Announcements;
