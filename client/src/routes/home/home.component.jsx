import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/map/map.component';
import EventList from '../../components/events/eventlist';
import EventProfileCard from '../../components/events/eventprofile-card';

const Home = () => (
  <>
    <div className="mt-4 text-center">
      <h1>Potluck Planner</h1>
      <h4>Lookout for the Cookout</h4>
    </div>
    <div className="parent container d-flex">
      <div className="container px-5 mt-4">
        <div className="row gx-5">
          <div className="col-md-6 text-center">
            <Map />
          </div>
        </div>
      </div>
      <div className="container px-5 mt-4">
        <div className="col-md-6 text-center">
          <div className="row gx-5">
            <h3>Potlucks Near You!</h3>
            {/* <Link to="/eventProfile">
        </Link> */}
            <EventList />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
