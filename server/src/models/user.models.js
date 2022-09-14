const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  sub: String,
  email: String,
  given_name: String,
  name: String,
  picture: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  clout: Number,
  awards: [String],
  foods: [{
    type: Schema.Types.ObjectId,
    name: String,
    ref: 'Event',
  }],
});

module.exports = model('user', userSchema);
