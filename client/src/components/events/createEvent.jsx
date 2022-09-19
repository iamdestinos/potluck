import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from '../../contexts/user.context';
import useInput from './useInput.hook';
import { EventsContext } from '../../contexts/events.context';
import cloutEnhancer from '../../controllers/clout-enhancements';

const CreateEvent = () => {
  const { loginWithRedirect } = useAuth0();
  const address = useInput('');
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  // const { events, setEvents, testArr } = useContext(EventsContext);
  const [event, setEvent] = useState({
    host: '',
    eventDate: '',
    eventTime: '',
    eventName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const sendEvent = async (e) => {
    if (currentUser) {
      e.preventDefault();
      axios.post('/event', {
        event: {
          ...event,
          location: {
            address: address.value,
            lat: address.lat,
            lon: address.lon,
          },
          attending: [currentUser._id],
        },
      })
        .then(({ data }) => {
          navigate('/');
          console.log(data);
        }).then(() => {
          testArr.push('2');
          cloutEnhancer(currentUser._id, 10);
        })
        .catch((err) => console.log('POST request was unsuccessful', err));
    } else {
      loginWithRedirect();
      navigate('/create-event');
    }
  };

  return (
    <div className="create-form">
      <div>
        <h2>New Event</h2>
        <form>
          <div className="mb-3 mx-auto w-25">
            <label htmlFor="event-time" className="col-form-label">
              Event Name:
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Event Name"
              name="eventName"
              value={event.eventName}
              onChange={handleChange}
            />
            <label htmlFor="event-time" className="col-form-label">
              Event Date:
            </label>
            <input
              className="form-control"
              type="date"
              name="eventDate"
              value={event.eventDate}
              onChange={handleChange}
            />
            <label htmlFor="event-time" className="col-form-label">
              Event Time:
            </label>
            <input
              className="form-control"
              type="time"
              name="eventTime"
              value={event.eventTime}
              onChange={handleChange}
            />

            <label htmlFor="event-location" className="col-form-label">
              Event Location:
            </label>
            <input
              type="text"
              className={`form-control ${
                address.value !== '' && 'is-valid'
              }`}
              name="eventLocation"
              {...address}
            />
            {address.suggestions?.length > 0 && (
            <div className="mb-3">
              {address.suggestions.map((suggestion, indx) => (
                <p
                  key={indx}
                  onClick={() => {
                    address.setValue(suggestion.place_name);
                    address.setLat(suggestion.center[1]);
                    address.setLon(suggestion.center[0]);
                    address.setSuggestions([]);
                  }}
                  className="suggestion"
                >
                  {suggestion.place_name}
                </p>
              ))}
            </div>
            )}

            <div>
              <button
                className="btn btn-success"
                style={{ width: 480 }}
                type="submit"
                onClick={sendEvent}
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
