import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfileCard = ({ selectedEvent }) => {
  console.log('This is the passed in Value:\n', selectedEvent);
  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
      <h1>{selectedEvent.eventName}</h1>
      <div className="main-dish" />
      <div className="side-dish" />
      <FoodForm foods={selectedEvent.foods} />
      <div className="attending">{`${selectedEvent.attending.length} people attending`}</div>
    </div>
  );
};

export default EventProfileCard;
