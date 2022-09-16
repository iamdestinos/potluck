import React from 'react';

const Events = ({ event, handleEvent }) => (
    <div onClick={() => handleEvent(event)}>{event.eventName}</div>
);

export default Events;
