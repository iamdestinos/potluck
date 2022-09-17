import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';
import Events from './events';

const EventList = () => {
  const { events } = useContext(EventsContext);
  // const [selectedEvent, setSelectedEvent] = useState();

  // const handleEvent = (event) => {
  //   console.log(event);
  //   setSelectedEvent(event);
  // };

  return (
    <div className="card" style={{ width: '60rem' }}>
      <ul className="list-group list-group-flush">
        {events.map((event) => (
          <Link key={event._id} to={`/eventprofile/${event._id}`}>
            <li className="list-group-item">
              <Events event={event} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
