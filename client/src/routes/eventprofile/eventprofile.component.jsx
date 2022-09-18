import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventsContext } from '../../contexts/events.context';
import { UserContext } from '../../contexts/user.context';
import EventProfileCard from '../../components/events/eventprofile-card';
import cloutEnhancer from '../../controllers/clout-enhancements';

const EventProfile = () => {
  const { id } = useParams();
  const { events, setEvents, testArr } = useContext(EventsContext);
  const { currentUser } = useContext(UserContext);
  const [going, setGo] = useState({ going: false });
  const foundEvent = events.find((event) => event._id === id);

  useEffect(() => {
    if (currentUser) {
      if (foundEvent.attending.includes(currentUser._id)) {
        setGo({ going: !going.going });
      }
    }
  }, []);

  // create a get request and setEvent context
  const updateEvents = async () => {
    try {
      const { data } = await axios.get('/event');
      await setEvents(data);
    } catch (err) {
      console.error('This is the error in the try/catch:\n', err);
    }
  };

  const letsGo = async () => {
    console.log('going.going:\n', going.going);
    if (currentUser) {
      if (going.going) {
        try {
          await axios.put(`/event/going/${foundEvent._id}`, { event: { $push: { attending: currentUser._id } } });
          setGo({ going: !going.going });
          await cloutEnhancer(currentUser._id, 3);
          await updateEvents();
          testArr.push('a');
        } catch (err) {
          console.error('This is the error #421:\n', err);
        }
      } else {
        try {
          await axios.put(`/event/going/${foundEvent._id}`, { event: { $pull: { attending: currentUser._id } } });
          setGo({ going: !going.going });
          await cloutEnhancer(currentUser._id, -3);
          await updateEvents();
        } catch (err) {
          console.error('This is the error #BTH:\n', err);
        }
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around pt-5">
        <EventProfileCard selectEvent={foundEvent} />
      </div>
      <button onClick={letsGo} type="button">{going.going ? 'I Wanna Go!' : 'I Don\'t Wanna Go!'}</button>
    </>
  );
};

export default EventProfile;
