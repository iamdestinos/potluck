const express = require('express');
const path = require('path');
require('./db');
const { User, Event } = require('./models/index');

const port = 3000;

const app = express();
const staticPath = path.resolve(__dirname, '../../client/src/public');

app.use(express.static(staticPath));

app.get('/event', (req, res) => {
  Event.find({})
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.post('/event', (req, res) => {
  Event.create({})
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

app.listen(port, () => console.log(`Potluck is running on port ${port}`));
