import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import EventList from './components/events/eventlist';
import EventProfile from './components/events/eventprofile';


const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/eventlist" element={<EventList />} />
      <Route path="/eventprofile" element={<EventProfile />} />
    </Route>
  </Routes>
);

export default App;
