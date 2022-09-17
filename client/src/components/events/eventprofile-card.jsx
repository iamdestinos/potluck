import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfileCard = ({ selectedEvent }) => (
  <div className="card text-bg-light mb-3" style={{ maxWidth: '80em' }}>
    <h1>{selectedEvent.eventName}</h1>
    <FoodForm foods={selectedEvent.foods} eventId={selectedEvent._id} />
    <div className="attending">{`${selectedEvent.attending.length} people attending`}</div>
  </div>
);

export default EventProfileCard;
