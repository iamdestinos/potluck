const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/potluck')
  .then(() => console.log('Connection successful'))
  .catch((err) => console.log('Connection unsuccessful', err));
