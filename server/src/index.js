const express = require('express');
const path = require('path');
const clc = require('cli-color');
require('dotenv').config();
require('./db');

const { PORT } = process.env;

const app = express();
const staticPath = path.resolve(__dirname, '../../client/src/public');

app.use(express.static(staticPath));

app.listen(PORT, () => console.log(clc.green.bgWhite(`Potluck is running on port ${PORT}...`)));
