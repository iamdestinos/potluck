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
  }, [events]);

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
          setGo({ going: !going.going });
          testArr.push('b');
          // console.log('ONE......');
          await cloutEnhancer(currentUser._id, -3);
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

    <div className="w-75 mx-auto mt-5 pt-4">
      <div className="d-flex justify-content-end">
        { going.going ? <button className="btn btn-success" onClick={letsGo} type="button">Attending</button>
          : <button className="btn btn-danger" onClick={letsGo} type="button">Not Attending</button> }
      </div>
      <EventProfileCard selectEvent={foundEvent} />
    </div>
  );
};

export default EventProfile;
