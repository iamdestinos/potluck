import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';
import EventProfileCard from '../../components/events/eventprofile-card';

const EventProfile = () => {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState({});

  const foundEvent = events.find((event) => event._id === id);

  useEffect(() => {
    setSelectedEvent(foundEvent);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-around pt-5">
        <EventProfileCard selectedEvent={foundEvent} />
      </div>
      <button type="submit">I want to go!</button>
    </>
  );
};

export default EventProfile;
