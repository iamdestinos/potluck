import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';
import Events from './events';

const EventList = () => {
  const { events } = useContext(EventsContext);

  return (
    <ul className="list-group list-group-flush" style={{ minWidth: '400px' }}>
      {events.map((event) => (
        <Link key={event._id} to={`/eventprofile/${event._id}`} style={{ textDecoration: 'none' }}>
          <li className="list-group-item">
            <Events event={event} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default EventList;
