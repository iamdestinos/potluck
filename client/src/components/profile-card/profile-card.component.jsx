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

  // destructure clout to use it easily
  const { clout } = currentUser;
  // create a descriptor based on clout
  let descriptor = '';

  // change value of desctiptor based on clout
  if (clout < 50) {
    descriptor = 'Welcome, you Potluck Padawan';
  } else if (clout < 100) {
    descriptor = 'Now you\'re a Dinner Debutante';
  } else if (clout < 150) {
    descriptor = 'Here comes the BBQ Baller!';
  } else if (clout < 200) {
    descriptor = 'It\'s the Cookout Collaborator!';
  } else if (clout < 250) {
    descriptor = 'Make way for the Field Day Frivolator!';
  } else {
    descriptor = 'It\'s the Merriment-making Master!';
  }

  // create a number that is the clout divided by 10, rounded down
  const cloutDivided = Math.floor(currentUser.clout / 10);
  let emojiClout = '';
  const emojiArr = ['🍉', '🌭', '🍗', '🍔', '🥗', '🍲', '🍤', '🫔', '🌽', '🥟', '😁', '😁', '😁', '😁', '😁'];

  for (let i = 0; i < cloutDivided; i++) {
    emojiClout += emojiArr[Math.floor(Math.random() * emojiArr.length)];
  }

  return (
    <div className="card" style={{ maxWidth: '800px' }}>
      <div className="row g-0">
        <div className="col-sm-5">
          <img className="card-img-top rounded-circle" style={{ width: '200px' }} src={currentUser.picture} alt={currentUser.name} />
          <h2>{currentUser.name}</h2>
          <p>{currentUser.email}</p>
          <h5>{descriptor}</h5>
          <p>{emojiClout}</p>
        </div>
        <div className="col-sm-7">
          <ul className="list-group list-group-flush">
            {userEvents.map((event, i) => (
              <Link key={event._id} to={`/eventprofile/${event._id}`} style={{ textDecoration: 'none' }}>
                <li className="list-group-item">
                  <Events key={event._id} event={event} view="profile" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
