import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import EventProfile from './routes/eventprofile/eventprofile.component';
import CreateEvent from './components/events/createEvent';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/eventprofile/:id" element={<EventProfile />} />
    </Route>
  </Routes>
);

export default App;
