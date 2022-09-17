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

// helper function for saving a new user
const saveUser = async (user) => {
  // check if the user already exists
  try {
    const userArray = await User.find({ sub: user.sub });
    if (!userArray.length) {
      return await User.create(user);
    }
    return userArray[0];
  } catch (err) {
    console.log('This is the error from saveUser:\n', err);
    return err;
  }
  // if not, save the user to the database
};

// helper function for saving a new event
const saveEvent = async (event) => {
  // check if the event already exists. if not, create it
  try {
    const eventArray = await Event.find({
      eventName: event.eventName,
      eventDate: event.eventDate,
      host: event.host,
    });
    if (!eventArray.length) {
      return await Event.create(event);
    }
    return eventArray[0];
  } catch (err) {
    console.log('This is the error from saveEvent inside POST route:\n', err);
    return err;
  }
};

// endpoint for creating a new user
app.post('/user', (req, res) => {
  saveUser(req.body.user)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log('This is the error from the POST request:\n', err);
      res.sendStatus(500);
    });
});

// endpoint fot creating a new event
app.post('/event', (req, res) => {
  console.log('This is the req.body:\n', req.body);
  saveEvent(req.body.event)
    .then((data) => {
      console.log('This is the data from the event POST request:\n', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log('This is the error from the POST request to /event:\n', err);
      res.sendStatus(500);
    });
});

// create an endpoint to retrieve ALL events
app.get('/event', (req, res) => {
  Event.find({})
    .then((data) => res.status(200).json(data))
    .catch(() => res.sendStatus(500));
});

app.put('/event/:eventId', (req, res) => {
  const { eventId } = req.params;

  Event.findOneAndUpdate({ _id: eventId }, { $push: { foods: req.body.food } }, (err, updatedObj) => {
    if (err) {
      console.error('error updating event:', err);
      res.sendStatus(500);
    } else {
      res.json(updatedObj);
    }
  });
});

app.delete('/event/:eventId', (req, res) => {
  const { eventId } = req.params;

  Event.findOneAndUpdate({ _id: eventId }, { $pull: { foods: req.body.food } }, (err, updatedObj) => {
    if (err) {
      console.error('error deleting food item:', err);
      res.sendStatus(500);
    } else {
      res.json(updatedObj);
    }
  });
});

// create an endpoint to retrieve all of the events the user is attending
app.get('/event/users/:userId', (req, res) => {
  // access the userId from the request params
  const { userId } = req.params;
  // query the event collections for events where the attending property contains the userId
  Event.find({ attending: userId })
    //  then send the events back with a 200 status
    .then((events) => {
      res.status(200).json(events);
    })
    // catch the errors and respond with a 500
    .catch((err) => {
      console.log('This is the error from Event.find inside route to userId parameter:\n', err);
      res.sendStatus(500);
    });
});

app.get('/event/:eventId', (req, res) => {
  const { eventId } = req.params;

  Event.findOne({ _id: eventId })
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      console.error('error finding request', eventId, err);
      res.sendStatus(500);
    })
});

// app.get('/user', (req, res) => {
//   User.find({})
//     .then((data) => {
//       console.log(data);
//       res.status(200).send(data);
//     })
//     .catch(() => res.sendStatus(500));
// });

// // create an endpoint for updating the user
// app.patch('/user', (req, res) => {
//   // locate the user and update
//   User.findByIdAndUpdate(req.body.user._id, )
// });

app.listen(PORT, () => console.log(clc.green.bgWhite(`Potluck is running on port ${PORT}...`)));
