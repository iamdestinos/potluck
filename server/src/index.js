const express = require('express');
const path = require('path');
const clc = require('cli-color');
require('dotenv').config();
require('./db');
const { User, Event } = require('./models/index');

const { PORT } = process.env;

const app = express();
const staticPath = path.resolve(__dirname, '../../client/src/public');

app.use(express.static(staticPath));

app.get('/event', (req, res) => {
  Event.find({})
    .then((data) => res.status(200).json(data))
    .catch(() => res.sendStatus(500));
});

app.post('/event', (req, res) => {
  Event.create({})
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

app.get('/users', (req, res) => {
  User.find({})
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => res.sendStatus(500));
})

app.listen(PORT, () => console.log(clc.green.bgWhite(`Potluck is running on port ${PORT}...`)));
