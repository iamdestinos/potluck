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
app.use(express.json());

const saveUser = async (user) => {
  // check if the user already exists
  try {
    const doesExist = await User.exists({ sub: user.sub });
    if (!doesExist) {
      return await User.create(user);
    }
    return 'User already exists';
  } catch (err) {
    console.log('This is the error from saveUser:\n', err);
    return err;
  }
  // if not, save the user to the database
};

app.post('/', (req, res) => {
  saveUser(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('This is the error from the POST request:\n', err);
      res.sendStatus(500);
    });
});

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
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(() => res.sendStatus(500));
});

app.listen(PORT, () => console.log(clc.green.bgWhite(`Potluck is running on port ${PORT}...`)));
