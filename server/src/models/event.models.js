const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  time: Date,
  location: {
    address: String,
    city: String,
    state: String,
    zip: String,
  },
  foods: [],
  attending: [],
});

module.exports = model('Event', eventSchema);
