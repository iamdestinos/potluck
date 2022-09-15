/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import saveUser from '../../helpers/client.helpers';

const Navigation = () => {
  const {
    loginWithRedirect, logout, isAuthenticated, user,
  } = useAuth0();

  const save0AuthUser = () => {
    // const { user } = useAuth0();
    // send an axios request to POST a new user to the db
    if (!user.sub) {
      axios.post('/', user)
        .catch((err) => {
          console.log('The error from the axios POST saveUser request:\n', err);
        });
    }
  };

  // create a ReactHook for when isAuthenticated changes
  useEffect(() => {
    if (isAuthenticated) {
      save0AuthUser();
    }
  }, [isAuthenticated]);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            PotLuck
          </Link>
          <ul className="nav justify-content-end">
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/profile">
                  Profile
                </Link>
              </li>
            )}
            <li className="nav-item">
              {!isAuthenticated ? (
                <span
                  className="text-light nav-link"
                  role="button"
                  onClick={loginWithRedirect}
                >
                  Log In
                </span>
              ) : (
                <span
                  className="text-light nav-link"
                  role="button"
                  onClick={logout}
                >
                  Log Out
                  {' '}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
