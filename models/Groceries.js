const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroceriesSchema = new Schema({
  item_name: {
    type: String,
    trim: true,
    required: 'What do you want?'
  },
  store: {
    type: String,
    required: 'Where can we find it??'
  },
  added: {
    type: Date,
    default: Date.now
  }
});

const Groceries = mongoose.model('Groceries', GroceriesSchema);

module.exports = Groceries;
