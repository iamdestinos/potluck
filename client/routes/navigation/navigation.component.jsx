import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LoginButton from '../../components/login-button/login-button.component';
import LogoutButton from '../../components/logout-button/logout-button.component';

const Navigation = () => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PotLuck
        </Link>
        <ul className="navbar-nav navbar-right mb-lg-0">
          <li className="nav-item">
            <LoginButton />
          </li>
          <li className="nav-item">
            <LogoutButton />

          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
