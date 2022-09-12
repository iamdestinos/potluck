import React from 'react';

import Map from '../../components/map/map.component';
import EventCard from '../../components/event-card/event-card.component';

const Home = () => (
  <>
    <div className="mt-4 text-center">
      <h1>Potluck Planner</h1>
      <h4>Leave nothing to luck</h4>
    </div>
    <div className="container px-5 mt-4">
      <div className="row gx-5">
        <div className="col-md-6 text-center">
          <Map />
        </div>
        <div className="col-md-6 text-center">
          <EventCard />
        </div>
      </div>
    </div>
  </>
);

export default Home;
