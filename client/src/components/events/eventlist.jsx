import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';

const EventList = () => {
  const { events } = useContext(EventsContext);
  // const [selectedEvent, setSelectedEvent] = useState();

  // const handleEvent = (event) => {
  //   console.log(event);
  //   setSelectedEvent(event);
  // };

  return (
    <div>
      {events.map((event) => (
        <Link key={event._id} to={`/eventprofile/${event._id}`}>
          {event.eventName}
        </Link>
      ))}
    </div>
  );
};

export default EventList;
