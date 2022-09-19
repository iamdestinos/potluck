import React, {useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../contexts/user.context';
import {useAuth0} from '@auth0/auth0-react';

const CreateEvent = () => {
  const {loginWithRedirect} = useAuth0();
  const navigate = useNavigate();
  const {currentUser}  = useContext(UserContext);
  const [event, setEvent] = useState({
    host: '',
    eventDate: '',
    eventTime: '',
    eventName: '',
    location: {
      address: '123 Central Perk',
      city: 'Manhattan',
      state: 'La',
      zip: '10002'
    },
    foods: [],
    attending: []
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEvent(prevEvent => ({...prevEvent,
    [name]: value}));
  }

  const sendEvent = async(e) => {
    if (currentUser) {
      e.preventDefault();
      axios.post('/event', {event})
        .then(() => {
          navigate('/');
        })
        .catch(err => console.log('POST request was unsuccessful', err));
    } else {
      loginWithRedirect();
      navigate('/create-event');
    }
  }
  
  return (
    <div className='create-form'>
      <div>
        <h2>New Event</h2>
        <form>
          <div>
            <input 
            className='host-input' 
            type='text' 
            placeholder='Host Name'
            name='host'
            value={event.host}
            onChange={handleChange}
            />
          </div>

          <div>
            <input
              className='event-input'
              type='text'
              placeholder='Event Name'
              name='eventName'
              value={event.eventName}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
            type='date'
            name='eventDate'
            value={event.eventDate}
            onChange={handleChange}
            />
          </div>

          <div>
            <input
            type='time'
            name='eventTime'
            value={event.eventTime}
            onChange={handleChange}
            />
          </div>
          <div>
          <button className='create-submit-button' 
          type='submit'
          onClick={sendEvent}
          >
           Create Event
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
