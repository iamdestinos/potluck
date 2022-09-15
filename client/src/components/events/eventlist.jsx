import React, { useState } from 'react';
import eventData from '../../../../server/src/sample-data/fake-events';


const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState({});

  const handleEvent = (e) => {
    console.log(e.target)
    eventData.forEach(event => {
      if (event._id === e.target.value) {
        setSelectedEvent(event);
        console.log('selected', selectedEvent);
      }
    });
  };
  return (
    <>
      <h1>Event Card Component</h1>
      {eventData.map((event) => (
        <li key={event._id} value={event._id} onClick={(e) => handleEvent(e)}>
          {event.location.address} Potluck
        </li>
      ))}
    </>
  );
};
export default EventList;
