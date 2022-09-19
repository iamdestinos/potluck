import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfileCard = ({
  selectEvent: {
    eventName, foods, _id, attending,
  },
}) => (
  <div className="card p-4 d-flex justify-content-between" style={{ maxWidth: '80em' }}>
    <h1>{eventName}</h1>
    <FoodForm foods={foods} eventId={_id} attending={attending} />
    <div className="attending">{`${attending.length} people attending`}</div>
  </div>
);

export default EventProfileCard;
