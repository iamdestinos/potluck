import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EventsContext } from '../../contexts/events.context';
import {UserContext} from '../../contexts/user.context';
import EventProfileCard from '../../components/events/eventprofile-card';

const EventProfile = () => {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const {currentUser} = useContext(UserContext);
  const [going, setGo] = useState({going: false});
  const foundEvent = events.find((event) => event._id === id);
  
  useEffect(() => {
    if (currentUser) {
      if (foundEvent.attending.includes(currentUser._id)) {
        setGo({going: !going.going});
      }
    }
  }, []);

  const letsGo = () => {
    if (currentUser) {
      if (going.going) {
        axios.put(`/event/going/${foundEvent._id}`,{event: {$push: {attending: currentUser._id}}})
          .then(() => {
            setGo({going: !going.going});
          })
          .catch(err => console.log(err));
        } else {
        axios.put(`/event/going/${foundEvent._id}`,{event: {$pull: {attending: currentUser._id}}})
        .then(() => {
          setGo({going: !going.going});
        })
        .catch(err => console.log(err));
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-around pt-5">
        <EventProfileCard selectEvent={foundEvent} />
      </div>
      <button onClick={letsGo} >{going.going? `I Wanna Go!` : `I Don't Wanna Go!`}</button>
    </>
  );
};

export default EventProfile;
