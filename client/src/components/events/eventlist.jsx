import React, { useState } from 'react';
import Events from './events';

const EventList = () => {
  const [events] = useState([
    'Algiers potluck',
    'Nola potluck',
    'Harvey potluck',
    'Gretna potluck',
  ]);
  return (
    <div className='eventlist'>
      <h1>Event Card Component</h1>
      {events.map((event, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="event-title" key={`${idx}`} 
        onClick={(e) => console.log(e.target) }>
          {event}
        </div>
      ))}
    </div>
  );
};

export default EventList;
