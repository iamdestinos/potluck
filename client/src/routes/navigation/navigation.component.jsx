/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
