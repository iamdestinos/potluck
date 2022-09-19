import React, { useState, useEffect, useContext } from 'react';

import MapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { EventsContext } from '../../contexts/events.context';

const Map = () => {
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

      {/* {events.map((event) => {
        // console.log("event in mapComponent",event?.eventLocation);
      return ( <Marker key={event._id}
          latitude={event?.eventLocation?.lat}
          longitude={event?.eventLocation?.lon}
        >
          <div style={{ color: 'red' }}>📍</div>
        </Marker>)
      })} */}

    </MapGl>
  );
};

export default Map;
