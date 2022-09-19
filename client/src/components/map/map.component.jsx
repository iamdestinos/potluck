import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { EventsContext } from '../../contexts/events.context';

const Map = () => {
  const navigate = useNavigate();
  const { events } = useContext(EventsContext);
  const initialViewport = {
    latitude: 37.0902,
    longitude: -95.7129,
    zoom: 3,
  };
  const [viewport, setViewport] = useState(initialViewport);

  useEffect(() => {
    // prompt user for location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setViewport({
          ...viewport, latitude, longitude, zoom: 10,
        });
      },
    );
  }, []);

  return (
    <MapGl
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      style={{
        width: 600,
        height: 700,
        borderRadius: 10,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxAccessToken={process.env.MAP_BOX_TOKEN}
      onMove={(evt) => setViewport(evt.viewState)}
    >

      {events.map((event) => (
        <Marker
          key={event._id}
          latitude={event?.location?.lat}
          longitude={event?.location?.lon}
        >
          {/* <div style={{ color: 'red' }}><h2>🍲</h2></div> */}
          <button type="button" onClick={() => navigate(`/eventprofile/${event._id}`)} style={{ all: 'unset', cursor: 'pointer' }}><h1>🍲</h1></button>
        </Marker>
      ))}

    </MapGl>
  );
};

export default Map;
