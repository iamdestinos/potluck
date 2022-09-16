import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfile = ({
  selectedEvent: {
    time,
    location: { address },
    foods,
    attending: { userIds },
  },
}) => (
  <div>
    <h1>{address}</h1>
    <div className='main-dish'></div>
    <div className='side-dish'></div>
    <FoodForm foods={foods} />
    <div className='attending'>{`${userIds.length} people attending`}</div>
  </div>
);

export default EventProfile;
