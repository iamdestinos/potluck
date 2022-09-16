import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { EventProvider } from './contexts/events.context';

const { DOMAIN } = process.env;
const { CLIENT_ID } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </UserProvider>
    </Auth0Provider>
  </BrowserRouter>,
);
