import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import Events from './components/events/events';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
    </Route>
  </Routes>
);

export default App;
