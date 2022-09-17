import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';
import {UserContext} from '../../contexts/user.context';
import EventProfileCard from '../../components/events/eventprofile-card';

const EventProfile = () => {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState({});
  const {currentUser} = useContext(UserContext);
  const [going, setGo] = useState({going: false});
  const letsGo = () => {
    if (currentUser) {
      setGo({going: !going.going});
    }
  };
  const foundEvent = events.find((event) => event._id === id);

  return (
    <>
      <div className="d-flex justify-content-around pt-5">
        <EventProfileCard selectedEvent={foundEvent} />
      </div>
      <input type='checkbox' checked={going.going} onChange={letsGo} >
      </input>
      {going.going ? ` I Wanna Go!`: ` I Don't Wanna Go!`}
    </>
  );
};

export default EventProfile;
