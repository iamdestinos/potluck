import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfile = ({
  selectedEvent: {
    time,
    eventName,
    foods,
    attending,
  },
}) => (
  <div>
    <h1>{eventName}</h1>
    <div className='main-dish'></div>
    <div className='side-dish'></div>
    <FoodForm foods={foods} />
    <div className='attending'>{`${attending.length} people attending`}</div>
  </div>
);

export default EventProfile;
