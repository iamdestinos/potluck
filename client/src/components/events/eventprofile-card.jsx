import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfileCard = ({
  selectEvent: {
    eventName, foods, _id, attending, location, eventTime
  },
}) => (
  <div className="card p-4 d-flex justify-content-between" style={{ maxWidth: '80em' }}>
    <h1>{eventName}</h1>
    <h5 className="text-muted">{location.address}</h5>
    <h4 className="text-muted">
      {new Date(
        `1970-01-01T${eventTime}Z`,
      ).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}

    </h4>
    <FoodForm foods={foods} eventId={_id} attending={attending} />
    <div className="attending">{`${attending.length} people attending`}</div>
  </div>
);

export default EventProfileCard;
