import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PotLuck
        </Link>
        <ul className="navbar-nav navbar-right mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/auth">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
