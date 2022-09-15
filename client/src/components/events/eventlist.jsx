import React, { useState } from 'react';
import Events from './events';
import EventProfile from './eventprofile';
import eventData from '../../../../server/src/sample-data/fake-events';

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState();

  const handleEvent = (event) => {
    console.log(event);
    setSelectedEvent(event);
  };

  return (
    <>
      {eventData.map((event) => (
        <Events
          key={event._id}
          event={event}
          handleEvent={handleEvent}
        />
      ))}
    </>
  );
};
export default EventList;
