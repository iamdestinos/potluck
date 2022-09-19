const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  host: String,
  eventDate: Date,
  eventTime: String,
  eventName: String,
  location: {
    address: String,
    lat: Number,
    lon: Number,
  },
  foods: [],
  attending: [],
});

module.exports = model('Event', eventSchema);
