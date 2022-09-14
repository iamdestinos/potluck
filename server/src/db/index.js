require('dotenv').config();
const mongoose = require('mongoose');
const clc = require('cli-color');

const { DB_URI } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => console.log(clc.white.bgGreen('Connected to Potluck-db...')))
  .catch((err) => console.log(clc.white.bgRed('Failed to connect to Potluck-db...', err)));
