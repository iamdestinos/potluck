import React, { useState } from 'react';
import FoodForm from '../food-form/food-form.component';

const EventProfileCard = ({ selectedEvent }) => (
  <div className="card text-bg-light mb-3" style={{ maxWidth: '80em' }}>
    <h1>{selectedEvent.eventName}</h1>
<<<<<<< HEAD
    <div className="main-dish" />
    <div className="side-dish" />
    <FoodForm foods={selectedEvent.foods} eventId={selectedEvent._id} />
=======
    <FoodForm foods={selectedEvent.foods} eventId={selectedEvent._id}/>
>>>>>>> cf2dbe50a3e69a3107cabe2eab45ef281d6771a9
    <div className="attending">{`${selectedEvent.attending.length} people attending`}</div>
  </div>
);

export default EventProfileCard;
