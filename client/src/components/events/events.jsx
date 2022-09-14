import React from 'react';
import eventData from '../../../../server/src/sample-data/fake-events';

const Events = () => {
  const {time, location, foods} = eventData;
  return (
    <>
      <div className='event'>Event</div>
      <div className='main-dish'>Main Dish</div>
      <div className='side-dish'>Side Dish</div>
      <div className='attending'>Attending</div>

    </>
  );
};

export default Events;
