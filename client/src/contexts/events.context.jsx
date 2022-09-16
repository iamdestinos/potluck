import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

export const EventsContext = createContext({
  events: [],
  setEvents: () => {},
});

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const value = { events, setEvents };

  useEffect(() => {
    axios.get('/event')
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log('The error from the axios GET request:\n', err);
      });
  }, []);
  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};
