import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

export const EventsContext = createContext({
  events: [],
  setEvents: () => {},
});

const testArr = [];

export const testArrChanger = () => {
  testArr.push('1');
  console.log('This is the testArr.length:\n', testArr.length);
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const value = { events, setEvents, testArr };
  useEffect(() => {
    console.log('We getting those events from the EventContext again!');
    axios.get('/event')
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log('The error from the axios GET request:\n', err);
      });
  }, [testArr.length]);
  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};
