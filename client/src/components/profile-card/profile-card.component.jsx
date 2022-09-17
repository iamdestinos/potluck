import React, { useContext, useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { EventsContext } from '../../contexts/events.context';
import Events from '../events/events';
import EventProfile from '../events/eventprofile-card';

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext);
  // const { events } = useContext(EventsContext);
  // const userEvents = events.filter((event) => event.attending.includes(currentUser._id));
  // console.log('events:\n', events);
  // console.log('userEvents:\n', userEvents);

  const [userEvents, setUserEvents] = useState([]);
  // send a get request to the event database that returns the events the current user is attending
  useEffect(() => {
    axios.get(`/event/users/${currentUser._id}`)
      .then(({ data }) => {
        // console.log('Heres the events I found:\n', data);
        setUserEvents(data);
      })
      .catch((err) => {
        console.log('This is the error from the get request in userEvents:\n', err);
      });
  }, []);

  console.log('HERES THE DANG userEVENTS!:\n', userEvents);

  // create a number
  const cloutDivided = Math.floor(currentUser.clout / 10);
  let emojiClout = '';
  const emojiArr = ['🍉', '🌭', '🍗', '🍔', '🥗', '🍲', '🍤', '🫔', '🌽', '🥟', '😁', '😁', '😁', '😁', '😁'];
  const randomNum = Math.floor(Math.random() * emojiArr.length);

  for (let i = 0; i < cloutDivided; i++) {
    emojiClout += emojiArr[Math.floor(Math.random() * emojiArr.length)];
  }

  return (
    <>
      <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
        <div className="text-center">
          <img className="card-img-top rounded-circle" style={{ width: '200px' }} src={currentUser.picture} alt={currentUser.name} />
        </div>
        <div className="card-body text-center">
          <h2>{currentUser.name}</h2>
          <p>{currentUser.email}</p>
          <p>
            {`clout: ${emojiClout}`}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {userEvents.map((event, i) => (
            <Link key={event._id} to={`/eventprofile/${event._id}`}>
              <li className="list-group-item">
                <Events key={event._id} event={event} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* {userEvents.map((event) => <EventProfile selectedEvent={event} />)} */}
      {/* <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
      <li className="list-group-item">Event Entry</li> */}
    </>
  );
};

export default ProfileCard;
