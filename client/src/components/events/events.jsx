import React from 'react';
import eventData from '../../../../server/src/sample-data/fake-events';

const Events = ({ event }) => (
  <>
    <div className='event'>{event}</div>
  </>
);

export default Events;
