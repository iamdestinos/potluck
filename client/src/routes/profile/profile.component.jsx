import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/user.context';
import ProfileCard from '../../components/profile-card/profile-card.component';
import EventProfileCard from '../../components/events/eventprofile-card';

const Profile = () => {
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

  return (
    <>
      <div className="d-flex justify-content-around pt-5">
        <ProfileCard />
      </div>
      <div className="d-flex justify-content-around pt-5">
        {userEvents.map((event) => <EventProfileCard selectedEvent={event} />)}
      </div>
    </>
  );
};

export default Profile;
