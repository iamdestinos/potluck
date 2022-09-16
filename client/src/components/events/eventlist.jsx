import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Events from './events';
import EventProfile from './eventprofile';
import eventData from '../../../../server/src/sample-data/fake-events';

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState();
  const [events, setEvents] = useState({});

  useEffect(() => {
    axios.get('/event')
      .then(result => console.log(result))
      .catch(err => console.log('Get request unsuccessful', err));
  }, []);

  const handleEvent = (event) => {
    console.log(event);
    setSelectedEvent(event);
  };
  return selectedEvent ?
  (<EventProfile selectedEvent={selectedEvent} />):
  (
    <div>
      {eventData.map(event => (
        <Events key={event._id} event={event} handleEvent={handleEvent} />
      ))}
    </div>
  );
};
export default EventList;
