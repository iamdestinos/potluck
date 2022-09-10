const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  time: Date,
  location: {
    address: String,
    city: String,
    state: String,
    zip: String,
  },
  foods: [{
    type: Schema.Types.ObjectId,
    name: String,
    ref: 'User',
  }],
  attending: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

module.exports = model('Event', eventSchema);
