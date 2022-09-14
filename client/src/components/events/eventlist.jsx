import React from 'react';
import Events from './events';
import eventData from '../../../../server/src/sample-data/fake-events';

const EventList = () => (
  <>
    <h1>Event Card Component</h1>
    {eventData.map((event, idx) => (
      <li key={`${idx}`}>{event.location.address} Potluck</li>
    ))}
  </>
);
export default EventList;
