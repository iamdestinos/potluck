import React, { useEffect, createContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  console.log('This is current user in UserProvider:', currentUser);
  useEffect(() => {
    if (isAuthenticated) {
      axios.post('/user', { user })
        .then(({ data }) => {
          console.log('This is some data from useEffect:', data);
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log('The error from the axios POST saveUser request:\n', err);
        });
    }
  }, [isAuthenticated, user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
