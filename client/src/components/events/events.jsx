import React from 'react';


const Events = ({ event, handleEvent }) => (
  <>
    <div className='event' onClick={() => handleEvent(event)}>{event.location.address}</div>
  </>
);

export default Events;
