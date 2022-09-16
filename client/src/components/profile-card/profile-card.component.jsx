import React, { useContext, useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { UserContext } from '../../contexts/user.context';

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext);
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

  // console.log('HERES THE DANG userEVENTS!:\n', userEvents);

  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
      <img className="card-img-top" src={currentUser.picture} alt={currentUser.name} />
      <div className="card-body text-center">
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <p>clout: 🍲🍲🍲🍲🍲🍲</p>
      </div>
      {userEvents.map((event) => <p className="list-group-item" key={event._id}>{event.location.address}</p>)}
      {/* <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li> */}
    </div>
  );
};

export default ProfileCard;
