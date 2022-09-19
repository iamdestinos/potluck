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
  const [going, setGo] = useState(false);
  const foundEvent = events.find((event) => event._id === id);

  useEffect(() => {
    if (currentUser) {
      if (foundEvent.attending.includes(currentUser._id)) {
        setGo(true);
      }
    }
  }, [events]);

  // create a get request and setEvent context
  const updateEvents = async () => {
    try {
      const { data } = await axios.get('/event');
      setEvents(data);
    } catch (err) {
      console.error('This is the error in the try/catch:\n', err);
    }
  };

  const letsGo = async () => {
    console.log('going:\n', going);
    if (currentUser) {
      if (!going) {
        try {
          await axios.put(`/event/going/${foundEvent._id}`, { event: { $push: { attending: currentUser._id } } });
          setGo(!going);
          cloutEnhancer(currentUser._id, 3);
          await updateEvents();
          // console.log('wait a sec. This is after updateEvents, but before testArr.push');
          testArr.push('a');
        } catch (err) {
          console.error('This is the error #421:\n', err);
        }
      } else {
        try {
          // console.log('We about to pull and we gon update events in....\nTHREE...');
          await axios.put(`/event/going/${foundEvent._id}`, { event: { $pull: { attending: currentUser._id } } });
          // console.log('TWO.....');
          setGo(!going);
          testArr.push('b');
          // console.log('ONE......');
          cloutEnhancer(currentUser._id, -3);
          // console.log('ZERO!!!');
          await updateEvents();
          // console.log('Did it work?');
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
      <button onClick={letsGo} type="button">{going ? 'Currently Attending' : 'Not Attending'}</button>
    </>
  );
};

export default EventProfile;
